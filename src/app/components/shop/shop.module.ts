import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgxsModule } from '@ngxs/store';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CompareComponent } from './compare/compare.component';

// Seller
import { SellerComponent } from './seller/seller.component';
import { SellerStoreBasicComponent } from './seller/seller-store/seller-store-basic/seller-store-basic.component';
import { SellerStoreComponent } from './seller/seller-store/seller-store.component';
import { SkeletonSellerStoreComponent } from './seller/seller-store/skeleton-seller-store/skeleton-seller-store.component';
import { SellerStoreClassicComponent } from './seller/seller-store/seller-store-classic/seller-store-classic.component';
import { SellerDetailsComponent } from './seller/seller-details/seller-details.component';
import { SellerDetailsBasicComponent } from './seller/seller-details/seller-details-basic/seller-details-basic.component';
import { SellerDetailsClassicComponent } from './seller/seller-details/seller-details-classic/seller-details-classic.component';
// Widgets
import { SellerContactDetailsComponent } from './seller/widgets/seller-contact-details/seller-contact-details.component';
import { SellerStoreLogoComponent } from './seller/widgets/seller-store-logo/seller-store-logo.component';
import { SellerStoreProductsComponent } from './seller/widgets/seller-store-products/seller-store-products.component';
import { SellerStoreRatingComponent } from './seller/widgets/seller-store-rating/seller-store-rating.component';
import { SellerStoreProductCountsComponent } from './seller/widgets/seller-store-product-counts/seller-store-product-counts.component';
import { SellerStoreNameComponent } from './seller/widgets/seller-store-name/seller-store-name.component';
import { SellerStoreDescriptionComponent } from './seller/widgets/seller-store-description/seller-store-description.component';
import { SellerStoreSocialLinksComponent } from './seller/widgets/seller-store-social-links/seller-store-social-links.component';

// Product & Product Details
import { ProductComponent } from './product/product.component';
import { ProductSidebarComponent } from './product/product-details/sidebar/sidebar.component';

// Layouts
import { ProductThumbnailComponent } from './product/product-details/product-thumbnail/product-thumbnail.component';
import { ProductImagesComponent } from './product/product-details/product-images/product-images.component';
import { ProductSliderComponent } from './product/product-details/product-slider/product-slider.component';
import { ProductStickyComponent } from './product/product-details/product-sticky/product-sticky.component';
import { ProductDigitalComponent } from './product/product-details/product-digital/product-digital.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';

// Widgets
import { StoreInformationComponent } from './product/product-details/widgets/store-information/store-information.component';
import { TrendingProductsComponent } from './product/product-details/widgets/trending-products/trending-products.component';
import { RelatedProductsComponent } from './product/product-details/widgets/related-products/related-products.component';
import { PaymentOptionComponent } from './product/product-details/widgets/payment-option/payment-option.component';
import { ProductInformationComponent } from './product/product-details/widgets/product-information/product-information.component';
import { ProductDetailsTabsComponent } from './product/product-details/widgets/product-details-tabs/product-details-tabs.component';
import { ProductReviewComponent } from './product/product-details/widgets/product-review/product-review.component';
import { ProductActionComponent } from './product/product-details/widgets/product-action/product-action.component';
import { ProductContainComponent } from './product/product-details/widgets/product-contain/product-contain.component';
import { ProductBannerComponent } from './product/product-details/widgets/product-banner/product-banner.component';
import { ProductBundleComponent } from './product/product-details/widgets/product-bundle/product-bundle.component';
import { ProductDeliveryInformationComponent } from './product/product-details/widgets/product-delivery-information/product-delivery-information.component';
import { ProductSocialShareComponent } from './product/product-details/widgets/product-social-share/product-social-share.component';
import { StickyCheckoutComponent } from './product/product-details/widgets/sticky-checkout/sticky-checkout.component';
import { ProductWholesaleComponent } from './product/product-details/widgets/product-wholesale/product-wholesale.component';

// Collection
import { CollectionComponent } from './collection/collection.component';
import { CollectionCategorySliderComponent } from './collection/collection-category-slider/collection-category-slider.component';
import { CollectionCategorySidebarComponent } from './collection/collection-category-sidebar/collection-category-sidebar.component';
import { CollectionBannerComponent } from './collection/collection-banner/collection-banner.component';
import { CollectionLeftSidebarComponent } from './collection/collection-left-sidebar/collection-left-sidebar.component';
import { CollectionRightSidebarComponent } from './collection/collection-right-sidebar/collection-right-sidebar.component';
import { CollectionListComponent } from './collection/collection-list/collection-list.component';
import { CollectionOffCanvasFilterComponent } from './collection/collection-offcanvas-filter/collection-offcanvas-filter.component';
// Widgets
import { CollectionCategoriesComponent } from './collection/widgets/collection-categories/collection-categories.component';
import { CollectionSidebarComponent } from './collection/widgets/sidebar/sidebar.component';
import { CollectionSortComponent } from './collection/widgets/collection-sort/collection-sort.component';
import { CollectionProductsComponent } from './collection/widgets/collection-products/collection-products.component';
import { CollectionPaginateComponent } from './collection/widgets/collection-paginate/collection-paginate.component';
import { CollectionCategoryFilterComponent } from './collection/widgets/filter/collection-category-filter/collection-category-filter.component';
import { CollectionPriceFilterComponent } from './collection/widgets/filter/collection-price-filter/collection-price-filter.component';
import { CollectionRatingFilterComponent } from './collection/widgets/filter/collection-rating-filter/collection-rating-filter.component';
import { CollectionFilterComponent } from './collection/widgets/filter/collection-filter/collection-filter.component';
import { CollectionAttributesComponent } from './collection/widgets/filter/collection-attributes-filter/collection-attributes-filter.component';
import { BannerComponent } from './collection/widgets/banner/banner.component';
import { SkeletonCollectionSidebarComponent } from './collection/widgets/skeleton-collection-sidebar/skeleton-collection-sidebar.component';
import { DigitalProductContainComponent } from './product/product-details/widgets/digital-product-contain/digital-product-contain.component';
import { VendorContainComponent } from './product/product-details/widgets/vendor-contain/vendor-contain.component';
import { VideoPlayModalComponent } from './product/product-details/widgets/video-play-modal/video-play-modal.component';

// Checkout
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressBlockComponent } from './checkout/address-block/address-block.component';
import { DeliveryBlockComponent } from './checkout/delivery-block/delivery-block.component';
import { PaymentBlockComponent } from './checkout/payment-block/payment-block.component';
import { QuestionsAnswersComponent } from './product/product-details/widgets/questions-answers/questions-answers.component';
import { ProductAccordionComponent } from './product/product-details/product-accordion/product-accordion.component';
import { ProductDetailsAccordionComponent } from './product/product-details/widgets/product-details-accordion/product-details-accordion.component';
import { CollectionNoSidebarComponent } from './collection/collection-no-sidebar/collection-no-sidebar.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CollectionBrandFilterComponent } from './collection/widgets/filter/collection-brand-filter/collection-brand-filter.component';
import { BrandState } from '../../shared/state/brand.state';
import { MyComponentWrapperComponent } from './checkout/my-react-component/MyReactComponentWrapper';
import { CheckoutSuccessComponent } from './checkout/checkout-success/checkout-success.component';


@NgModule({
  declarations: [
    CartComponent,
    WishlistComponent,
    CompareComponent,
    SellerComponent,
    SellerStoreBasicComponent,
    SellerStoreComponent,
    SkeletonSellerStoreComponent,
    SellerStoreClassicComponent,
    SellerDetailsComponent,
    SellerDetailsBasicComponent,
    SellerDetailsClassicComponent,
    SellerContactDetailsComponent,
    SellerStoreLogoComponent,
    SellerStoreProductsComponent,
    SellerStoreRatingComponent,
    SellerStoreProductCountsComponent,
    SellerStoreNameComponent,
    SellerStoreDescriptionComponent,
    SellerStoreSocialLinksComponent,
    ProductComponent,
    ProductSidebarComponent,
    ProductThumbnailComponent,
    ProductImagesComponent,
    ProductSliderComponent,
    ProductStickyComponent,
    StoreInformationComponent,
    TrendingProductsComponent,
    RelatedProductsComponent,
    PaymentOptionComponent,
    ProductInformationComponent,
    ProductDetailsTabsComponent,
    ProductReviewComponent,
    ProductActionComponent,
    ProductContainComponent,
    ProductBannerComponent,
    ProductBundleComponent,
    ProductDeliveryInformationComponent,
    ProductSocialShareComponent,
    StickyCheckoutComponent,
    ProductWholesaleComponent,
    CollectionComponent,
    CollectionCategorySliderComponent,
    CollectionCategorySidebarComponent,
    CollectionBannerComponent,
    CollectionLeftSidebarComponent,
    CollectionRightSidebarComponent,
    CollectionListComponent,
    CollectionOffCanvasFilterComponent,
    CollectionCategoriesComponent,
    CollectionSidebarComponent,
    CollectionSortComponent,
    CollectionProductsComponent,
    CollectionPaginateComponent,
    CollectionCategoryFilterComponent,
    CollectionPriceFilterComponent,
    CollectionRatingFilterComponent,
    CollectionFilterComponent,
    CollectionAttributesComponent,
    SkeletonSellerStoreComponent,
    BannerComponent,
    SkeletonCollectionSidebarComponent,
    CheckoutComponent,
    AddressBlockComponent,
    DeliveryBlockComponent,
    PaymentBlockComponent,
    QuestionsAnswersComponent,
    ProductAccordionComponent,
    ProductDetailsAccordionComponent,
    CollectionNoSidebarComponent,
    ProductDigitalComponent,
    DigitalProductContainComponent,
    VendorContainComponent,
    VideoPlayModalComponent,
    OrderTrackingComponent,
    OrderDetailsComponent,
    CollectionBrandFilterComponent,
    BrandComponent,
    CategoryComponent,
    MyComponentWrapperComponent,
    CheckoutSuccessComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    NgxImageZoomModule,
    TranslateModule,
    NgxsModule.forRoot([
      BrandState
    ])
  ]
})
export class ShopModule { }
