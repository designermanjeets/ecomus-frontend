import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '../../../../../../shared/interface/core.interface';

@Component({
  selector: 'app-collection-size-filter',
  templateUrl: './collection-size-filter.component.html',
  styleUrls: ['./collection-size-filter.component.scss']
})
export class CollectionSizeFilterComponent {

  @Input() filter: Params;

  public sizes: string[] = ['S', 'M', 'L', 'XL', 'XXL'];
  public selectedSizes: string[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router){
  }

  ngOnChanges() {
    this.selectedSizes = this.filter['size'] ? this.filter['size'].split(',') : [];
  }

  applyFilter(event: Event) {
    const index = this.selectedSizes.indexOf((<HTMLInputElement>event?.target)?.value);  // checked and unchecked value

    if ((<HTMLInputElement>event?.target)?.checked)
      this.selectedSizes.push((<HTMLInputElement>event?.target)?.value); // push in array checked value
    else
      this.selectedSizes.splice(index,1);  // removed in array unchecked value

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        size: this.selectedSizes.length ? this.selectedSizes?.join(",") : null,
        page: 1
      },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string){
    if(this.selectedSizes?.indexOf(item) != -1){
      return true;
    }
    return false;
  }

}