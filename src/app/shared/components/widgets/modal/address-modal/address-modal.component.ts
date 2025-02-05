import { ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Select, Store } from '@ngxs/store';
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';
import { Select2Data, Select2UpdateEvent } from 'ng-select2-component';
import { CreateAddress, UpdateAddress } from '../../../../action/account.action';
import { CountryState } from '../../../../state/country.state';
import { StateState } from '../../../../state/state.state';
import { UserAddress } from '../../../../interface/user.interface';
import * as data from '../../../../data/country-code';
import { Country, State, City }  from 'country-state-city';
import { AuthService } from '../../../../services/auth.service';
import { NotificationService } from '../../../../services/notification.service';

@Component({
  selector: 'address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.scss']
})
export class AddressModalComponent {

  public form: FormGroup;
  public closeResult: string;
  public modalOpen: boolean = false;

  public states$: Observable<Select2Data>;
  public city$: Observable<Select2Data>;
  public cityOptions: Select2Data = [];
  public address: UserAddress | null;
  public codes = data.countryCodes;

  @ViewChild("addressModal", { static: false }) AddressModal: TemplateRef<string>;
  @Select(CountryState.countries) countries$: Observable<Select2Data>;

  constructor(
    private modalService: NgbModal,
    private store: Store,
    private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private authService: AuthService,
    private notificationService: NotificationService

  ) {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      state_id: new FormControl('', [Validators.required]),
      country_id: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),
      country_code: new FormControl('91', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)])
    })

    this.form.controls['phone']?.valueChanges.subscribe((value) => {
      if(value && value.toString().length > 10) {
        this.form.controls['phone']?.setValue(+value.toString().slice(0, 10));
      }
    });

    this.form.controls['pincode']?.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe((value) => {
      if(value && value.toString().length > 5) {
        console.log(value);

        let action = new CreateAddress(this.form.value);
        if(this.address) {
          action = new UpdateAddress(this.form.value, this.address.id);
        }
        this.validatePinCode({
          city: this.form.controls['city'].value,
          pincode: value
        });
      }
    });

    setTimeout(() => {
      this.form.controls['country_id'].disable();
    }, 500);

  }

  validatePinCode(payload: any) {
    this.authService.validatePinCode(payload).subscribe({
      next: (res) => {
        if(res.status) {
          this.form.controls['pincode'].setErrors(null);
        } else {
          this.form.controls['pincode'].markAsTouched();
          this.form.controls['pincode'].setErrors({required: true});
          this.notificationService.showError(res.msg);
        }
      }
    });
  }

  countryChange(data: Select2UpdateEvent) {
    if(data && data?.value) {
      this.states$ = this.store
          .select(StateState.states)
          .pipe(map(filterFn => filterFn(+data?.value)));
      if(!this.address)
        this.form.controls['state_id'].setValue('');
    } else {
      this.form.controls['state_id'].setValue('');
    }
  }

  stateChange(data: Select2UpdateEvent) {
    if(data && data?.value) {
      data.options?.length && this.states$.subscribe((dataz) => {
        const filterState = dataz.filter((state) => state.label == data.options[0].label);
        const getAllStates = State.getStatesOfCountry('IN');
        const filterStateByCode = getAllStates.filter((state) => state.name == filterState[0].label);
        const  cityOptions = City.getCitiesOfState('IN', filterStateByCode.length ? filterStateByCode[0].isoCode : '');
        this.cityOptions = [];
        cityOptions.forEach((city) => {
          this.cityOptions.push({
            label: city.name,
            value: city.name
          });
        });
      });
    } else {
      this.form.controls['city'].setValue('');
    }
  }
  
  cityChange(data: Select2UpdateEvent) {
    if(data && data?.value) {
      this.form.controls['pincode'].enable();
    } else {
      this.form.controls['pincode'].disable();
    }
  }

  async openModal(value?: UserAddress) {
    this.modalOpen = true;
    this.patchForm(value);
    this.modalService.open(this.AddressModal, {
      ariaLabelledBy: 'address-add-Modal',
      centered: true,
      windowClass: 'theme-modal modal-lg address-modal'
    }).result.then((result) => {
      `Result ${result}`
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: ModalDismissReasons): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  patchForm(value?: UserAddress) {
    if(value) {
      this.address = value;
      this.form.patchValue({
        user_id: value?.user_id,
        title: value?.title,
        street: value?.street,
        country_id: value?.country_id,
        state_id: value?.state_id,
        city: value?.city,
        pincode: value?.pincode,
        country_code: value?.country_code,
        phone: value?.phone
      });
    } else {
      this.address = null;
      this.form.reset();
      this.form?.controls?.['country_code'].setValue('91');
    }
  }

  submit(){

    this.form.markAllAsTouched();

    let action = new CreateAddress(this.form.value);

    if(this.address) {
      action = new UpdateAddress(this.form.value, this.address.id);
    }

    if(this.form.valid) {
      this.store.dispatch(action).subscribe({
        complete: () => {
          this.form.reset();
          if(!this.address){
            this.form?.controls?.['country_code'].setValue('91');
          }
        }
      });
    }
  }

  ngOnDestroy() {
    if(this.modalOpen) {
      this.modalService.dismissAll();
    }
  }

}
