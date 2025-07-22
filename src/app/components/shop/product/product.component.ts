import { Component, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Breadcrumb } from '../../../shared/interface/breadcrumb';
import { Product } from '../../../shared/interface/product.interface';
import { ProductState } from '../../../shared/state/product.state';
import { ThemeOptionState } from '../../../shared/state/theme-option.state';
import { Option } from '../../../shared/interface/theme-option.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnDestroy {

  @Select(ProductState.selectedProduct) product$: Observable<Product>;
  @Select(ThemeOptionState.themeOptions) themeOptions$: Observable<Option>;

  public breadcrumb: Breadcrumb = {
    title: "Product",
    items: []
  };
  public layout: string = 'product_digital';
  public product: Product;
  public isScrollActive = false;

  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute) {
    const productSub = this.product$.subscribe(product => {
      this.product = product;
      this.breadcrumb.items = [];
      this.breadcrumb.title = product?.name || 'Product';
      this.breadcrumb.items.push(
        { label: 'Product', active: true },
        { label: product?.name || '', active: false }
      );
      // ✅ No need to call SeoService — it handles meta updates on route change
    });
    this.subscriptions.push(productSub);

    const layoutSub = this.route.queryParams.subscribe(params => {
      if (params['layout']) {
        this.layout = params['layout'];
      } else {
        const optionSub = this.themeOptions$.subscribe(option => {
          this.layout = option?.product?.product_layout || 'product_thumbnail';
        });
        this.subscriptions.push(optionSub);
      }
    });
    this.subscriptions.push(layoutSub);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const button = document.querySelector('.scroll-button');
    if (button) {
      const buttonRect = button.getBoundingClientRect();
      if (buttonRect.bottom < window.innerHeight && buttonRect.bottom < 0) {
        this.isScrollActive = true;
        document.body.classList.add('stickyCart');
      } else {
        this.isScrollActive = false;
        document.body.classList.remove('stickyCart');
      }
    }
  }

  ngOnDestroy() {
    document.body.classList.remove('stickyCart');
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
