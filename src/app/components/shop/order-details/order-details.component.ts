import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject, of } from 'rxjs';
import { switchMap, mergeMap, takeUntil } from 'rxjs/operators';
import { OrderTracking } from '../../../shared/action/order.action';
import { GetOrderStatus } from '../../../shared/action/order-status.action';
import { OrderState } from '../../../shared/state/order.state';
import { OrderStatusState } from '../../../shared/state/order-status.state';
import { Order } from '../../../shared/interface/order.interface';
import { OrderStatusModel } from '../../../shared/interface/order-status.interface';
import { Breadcrumb } from '../../../shared/interface/breadcrumb';
import { CountryState } from '../../../shared/state/country.state';
import { StateState } from '../../../shared/state/state.state';
import { Country, CountryModel } from '../../../shared/interface/country.interface';
import { States, StatesModel } from '../../../shared/interface/state.interface';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {

  @Select(OrderStatusState.orderStatus) orderStatus$: Observable<OrderStatusModel>;
  @Select(CountryState.country) country$: Observable<CountryModel>;
  @Select(StateState.state) state$: Observable<StatesModel>;

  private destroy$ = new Subject<void>();

  public order: Order | null;
  public email_or_phone: string;
  public countries: Country[] = [];
  public states: States[] = [];

  public breadcrumb: Breadcrumb = {
    title: "Order Details",
    items: [{ label: 'Order Details', active: false }]
  };

  constructor(private store: Store,
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private cdRef: ChangeDetectorRef 
  ) {
    this.store.dispatch(new GetOrderStatus());
    this.country$.subscribe(country => this.countries = country.data);
    this.state$.subscribe(state => this.states = state.data);
  }

  ngOnInit() {
    this.route.queryParams
      .pipe(
        switchMap(params => {
            this.email_or_phone = params['email_or_phone'];
            return this.store
                      .dispatch(new OrderTracking({ order_number: params['order_number'].toString(), email_or_phone: params['email_or_phone']}))
                      .pipe(mergeMap(() => this.store.select(OrderState.selectedOrder)))
          }
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(order => {
        this.order = order;
        this.order && (this.order.consumer = order?.guest_order ? order?.guest_order : order?.consumer);
      });
  }

  getCountryName(id: number) {
    return this.countries.find(country => country.id == id)?.name;
  }

  getStateName(id: number) {
    return this.states.find(state => state.id == id)?.name;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
