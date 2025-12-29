import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { AttributeService } from '../../../../../shared/services/attribute.service';
import { Params } from '../../../../../shared/interface/core.interface';
import { AttributeModel } from '../../../../../shared/interface/attribute.interface';
import { AttributeState } from '../../../../../shared/state/attribute.state';
import { GetAttributes } from '../../../../../shared/action/attribute.action';
import { BrandState } from '../../../../../shared/state/brand.state';
import { BrandModel } from '../../../../../shared/interface/brand.interface';
import { GetBrands } from '../../../../../shared/action/brand.action';
import { ProductModel, Product } from '../../../../../shared/interface/product.interface';
import { ProductState } from '../../../../../shared/state/product.state';

@Component({
  selector: 'app-collection-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class CollectionSidebarComponent implements OnInit, OnDestroy {

  @Input() filter: Params;
  @Input() hideFilter: string[];

  @Select(AttributeState.attribute) attribute$: Observable<AttributeModel>;
  @Select(BrandState.brand) brand$: Observable<BrandModel>;
  @Select(ProductState.product) product$: Observable<ProductModel>;

  public minPrice: number = 0;
  public maxPrice: number = 15000;
  private subscription: Subscription = new Subscription();

  constructor(private store: Store,
    public attributeService: AttributeService) {
    this.store.dispatch(new GetAttributes({ status: 1}));
    this.store.dispatch(new GetBrands({status: 1}));
  }

  ngOnInit() {
    this.subscription.add(
      this.product$.subscribe(products => {
        if (products && products.data && products.data.length > 0) {
          this.calculatePriceRange(products.data);
        } else {
          // Fallback to default range when no products
          this.minPrice = 0;
          this.maxPrice = 15000;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private calculatePriceRange(products: Product[]): void {
    if (!products || products.length === 0) {
      this.minPrice = 0;
      this.maxPrice = 15000;
      return;
    }

    let min = Infinity;
    let max = 0;

    products.forEach(product => {
      // Use sale_price if available and sale is enabled, otherwise use regular price
      const price = (product.is_sale_enable && product.sale_price && product.sale_price > 0)
        ? product.sale_price
        : product.price;

      if (price < min) {
        min = price;
      }
      if (price > max) {
        max = price;
      }

      // Also check variations for min/max prices
      if (product.variations && product.variations.length > 0) {
        product.variations.forEach(variation => {
          const variationPrice = (variation.sale_price && variation.sale_price > 0)
            ? variation.sale_price
            : variation.price;

          if (variationPrice < min) {
            min = variationPrice;
          }
          if (variationPrice > max) {
            max = variationPrice;
          }
        });
      }
    });

    // Set reasonable defaults if no valid prices found
    if (min === Infinity) min = 0;
    if (max === 0) max = 15000;

    // Round down min price and round up max price for better UX
    this.minPrice = Math.floor(min);
    this.maxPrice = Math.ceil(max);

    // Ensure there's always a reasonable range
    if (this.maxPrice <= this.minPrice) {
      this.maxPrice = this.minPrice + 1000;
    }
  }

  closeCanvasMenu() {
    this.attributeService.offCanvasMenu = false;
  }

}
