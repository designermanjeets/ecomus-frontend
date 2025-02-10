import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ProductDetailModalComponent } from '../../../widgets/modal/product-detail-modal/product-detail-modal.component';
import { Product } from '../../../../../shared/interface/product.interface';
import { CartAddOrUpdate, Cart } from '../../../../../shared/interface/cart.interface';
import { AddToWishlist, DeleteWishlist } from '../../../../../shared/action/wishlist.action';
import { AddToCompare } from '../../../../../shared/action/compare.action';
import { AddToCart } from '../../../../../shared/action/cart.action';
import { CartState } from '../../../../../shared/state/cart.state';
import { VariationModalComponent } from '../../modal/variation-modal/variation-modal.component';

@Component({
  selector: 'app-basic-product-box',
  templateUrl: './basic-product-box.component.html',
  styleUrl: './basic-product-box.component.scss'
})
export class BasicProductBoxComponent {

  @Input() product: Product;
  @Input() class: string;
  @Input() close: boolean;

  @Select(CartState.cartItems) cartItem$: Observable<Cart[]>;

  @ViewChild("productDetailModal") productDetailModal: ProductDetailModalComponent;
  @ViewChild("variationModal") VariationModal: VariationModalComponent;

  public cartItem: Cart | null;
  public currentDate: number | null;
  public saleStartDate: number | null;

  constructor(
    private store: Store,
    config: NgbRatingConfig,
    private cdRef: ChangeDetectorRef
  ) {
		config.max = 5;
		config.readonly = true;
	}

  ngOnInit() {
    this.cartItem$.subscribe(items => {
      this.cartItem = items.find(item => item.product.id == this.product.id)!;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.product.rating_count = Math.floor(Math.random() * 3) + 3;
    }, 500);
    this.cdRef.detectChanges();
  }

  addToCart(product: Product, qty: number) {
    const params: CartAddOrUpdate = {
      id: this.cartItem ? this.cartItem.id : null,
      product: product,
      product_id: product?.id,
      variation_id: this.cartItem ? this.cartItem?.variation_id : null,
      variation: this.cartItem ? this.cartItem?.variation : null,
      quantity: qty
    }
    this.store.dispatch(new AddToCart(params));
  }

  addToWishlist(product: Product){
    product['is_wishlist'] = !product['is_wishlist'];
    let action = product['is_wishlist']? new AddToWishlist({ product_id: product.id }) : new DeleteWishlist(product.id);
    if(action){
      this.store.dispatch(action);
    }
  }

  removeWishlist(id: number){
    this.store.dispatch(new DeleteWishlist(id));
  }

  addToCompar(id: number){
    this.store.dispatch(new AddToCompare({ product_id: id }));
  }

  externalProductLink(link: string) {
    if(link) {
      window.open(link, "_blank");
    }
  }

}
