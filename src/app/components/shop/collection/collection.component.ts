import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Params } from '../../../shared/interface/core.interface';
import { Breadcrumb } from '../../../shared/interface/breadcrumb';
import { ProductModel } from '../../../shared/interface/product.interface';
import { GetProducts } from '../../../shared/action/product.action';
import { ProductState } from '../../../shared/state/product.state';
import { ThemeOptionState } from '../../../shared/state/theme-option.state';
import { Option } from '../../../shared/interface/theme-option.interface';
 
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {

  @Select(ProductState.product) product$: Observable<ProductModel>;
  @Select(ThemeOptionState.themeOptions) themeOptions$: Observable<Option>;

  public breadcrumb: Breadcrumb = {
    title: "Collections",
    items: [{ label: 'Collections', active: false }]
  };
  public layout: string = 'collection_category_slider';
  public skeleton: boolean = true;

  public filter: Params = {
    'page': 1, // Current page number
    'paginate': 40, // Display per page,
    'status': 1,
    'field': 'created_at',
    'price': '',
    'category': '',
    'tag': '',
    'sort': 'asc', // ASC, DSC
    'sortBy': 'asc',
    'rating': '',
    'attribute': '',
  };

  public totalItems: number = 0;

  constructor(private route: ActivatedRoute,
    private store: Store) {

    // Get Query params..
    this.route.queryParams.subscribe(params => {
      this.filter = {
        'page': params['page'] ? params['page'] : 1,
        'paginate': 40,
        'status': 1,
        'price': params['price'] ? params['price'] : '',
        'brand': params['brand'] ? params['brand'] : '',
        'category': params['category'] ? params['category'] : '',
        'tag': params['tag'] ? params['tag'] : '',
        'field': params['field'] ? params['field'] : this.filter['field'],
        'sortBy': params['sortBy'] ? params['sortBy'] : this.filter['sortBy'],
        'rating': params['rating'] ? params['rating'] : '',
        'attribute': params['attribute'] ? params['attribute'] : '',
      }

      this.store.dispatch(new GetProducts(this.filter));

      // Params For Demo Purpose only
      if(params['layout']) {
        this.layout = params['layout'];
      } else {
        // Get Collection Layout
        this.themeOptions$.subscribe(option => {
          this.layout = option?.collection && option?.collection?.collection_layout
            ? option?.collection?.collection_layout : 'collection_category_slider';
        });
      }

      this.filter['layout'] = this.layout;
    });
    this.product$.subscribe(product => this.totalItems = product?.total);
  }

}
