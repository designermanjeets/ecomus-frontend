import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Select2Module } from 'ng-select2-component';
import { SwiperModule } from 'swiper/angular';
import { TranslateModule } from '@ngx-translate/core';

// Components
import { HeaderComponent } from './components/header/header.component';
import { ClassicHeaderComponent } from './components/header/classic-header/classic-header.component';
import { StandardHeaderComponent } from './components/header/standard-header/standard-header.component';
import { BasicHeaderComponent } from './components/header/basic-header/basic-header.component';
import { MinimalHeaderComponent } from './components/header/minimal-header/minimal-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BasicFooterComponent } from './components/footer/basic-footer/basic-footer.component';

// Header Widgets
import { TopbarComponent } from './components/header/widgets/topbar/topbar.component';
import { LogoComponent } from './components/header/widgets/logo/logo.component';
import { SearchComponent } from './components/header/widgets/search/search.component';
import { WishlistComponent } from './components/header/widgets/wishlist/wishlist.component';
import { CartComponent } from './components/header/widgets/cart/cart.component';
import { MyAccountComponent } from './components/header/widgets/my-account/my-account.component';
import { CallComponent } from './components/header/widgets/call/call.component';
import { CategoriesBlockComponent } from './components/header/widgets/categories/categories.component';
import { DealComponent } from './components/header/widgets/deal/deal.component';
import { CurrencyComponent } from './components/header/widgets/currency/currency.component';
import { LanguageComponent } from './components/header/widgets/language/language.component';
import { CompareComponent } from './components/header/widgets/compare/compare.component';
import { SearchBoxComponent } from './components/header/widgets/search-box/search-box.component';
import { NoticeComponent } from './components/header/widgets/notice/notice.component';
import { NavbarMenuButtonComponent } from './components/header/widgets/navbar-menu-button/navbar-menu-button.component';

// Footer Widgets
import { FooterLogoComponent } from './components/footer/widgets/logo/logo.component';
import { FooterCategoriesComponent } from './components/footer/widgets/categories/categories.component';
import { AboutComponent } from './components/footer/widgets/about/about.component';
import { LinksComponent } from './components/footer/widgets/links/links.component';
import { ContactComponent } from './components/footer/widgets/contact/contact.component';
import { CopyrightComponent } from './components/footer/widgets/copyright/copyright.component';
import { SocialLinksComponent } from './components/footer/widgets/social-links/social-links.component';
import { PaymentOptionsComponent } from './components/footer/widgets/payment-options/payment-options.component';

// Widgets
import { LoaderComponent } from './components/widgets/loader/loader.component';
import { BreadcrumbComponent } from './components/widgets/breadcrumb/breadcrumb.component';
import { BreadcrumbDigitalComponent } from './components/widgets/breadcrumb-digital/breadcrumb-digital.component';
import { CookieComponent } from './components/widgets/cookie/cookie.component';
import { MenuComponent } from './components/widgets/menu/menu.component';
import { StickyCartComponent } from './components/widgets/sticky-cart/sticky-cart.component';
import { ThemeCustomizerComponent } from './components/widgets/theme-customizer/theme-customizer.component';
import { PaginationComponent } from './components/widgets/pagination/pagination.component';
import { CategoriesComponent } from './components/widgets/categories/categories.component';
import { StickyCompareComponent } from './components/widgets/sticky-compare/sticky-compare.component';
import { RecentPurchasePopupComponent } from './components/widgets/recent-purchase-popup/recent-purchase-popup.component';
import { BackToTopComponent } from './components/widgets/back-to-top/back-to-top.component';
import { FeatherIconsComponent } from './components/widgets/feather-icons/feather-icons.component';
import { AlertComponent } from './components/widgets/alert/alert.component';
import { ButtonComponent } from './components/widgets/button/button.component';
import { DeleteModalComponent } from './components/widgets/modal/delete-modal/delete-modal.component';
import { ConfirmationModalComponent } from './components/widgets/modal/confirmation-modal/confirmation-modal.component';
import { DealsModalComponent } from './components/widgets/modal/deals-modal/deals-modal.component';
import { AddressModalComponent } from './components/widgets/modal/address-modal/address-modal.component';
import { ChangePasswordModalComponent } from './components/widgets/modal/change-password-modal/change-password-modal.component';
import { EditProfileModalComponent } from './components/widgets/modal/edit-profile-modal/edit-profile-modal.component';
import { TitleComponent } from './components/widgets/title/title.component';
import { ImageLinkComponent } from './components/widgets/image-link/image-link.component';
import { NoDataComponent } from './components/widgets/no-data/no-data.component';
import { SizeChartModalComponent } from './components/widgets/modal/size-chart-modal/size-chart-modal.component';
import { DeliveryReturnModalComponent } from './components/widgets/modal/delivery-return-modal/delivery-return-modal.component';
import { ReviewModalComponent } from './components/widgets/modal/review-modal/review-modal.component';
import { QuestionModalComponent } from './components/widgets/modal/question-modal/question-modal.component';
import { VariationModalComponent } from './components/widgets/modal/variation-modal/variation-modal.component';
import { NewsletterModalComponent } from './components/widgets/modal/newsletter-modal/newsletter-modal.component';
import { ExitModalComponent } from './components/widgets/modal/exit-modal/exit-modal.component';
import { MobileMenuComponent } from './components/header/widgets/mobile-menu/mobile-menu.component';
import { ProductBoxComponent } from './components/widgets/product-box/product-box.component';
import { SkeletonProductBoxComponent } from './components/widgets/product-box/widgets/skeleton-product-box/skeleton-product-box.component';
import { ProductBoxVerticalComponent } from './components/widgets/product-box/product-box-vertical/product-box-vertical.component';
import { ProductDetailModalComponent } from './components/widgets/modal/product-detail-modal/product-detail-modal.component';
import { RefundModalComponent } from './components/widgets/modal/refund-modal/refund-modal.component';
import { VariantAttributesComponent } from './components/widgets/variant-attributes/variant-attributes.component';
import { PayModalComponent } from './components/widgets/modal/pay-modal/pay-modal.component';
import { DigitalProductBoxComponent } from './components/widgets/product-box/digital-product-box/digital-product-box.component';
import { SubscribeFooterComponent } from './components/footer/subscribe-footer/subscribe-footer.component';
import { LinkBoxComponent } from './components/widgets/menu/link-box/link-box.component';
import { SaleTimerComponent } from './components/widgets/sale-timer/sale-timer.component';
import { BasicProductBoxComponent } from './components/widgets/product-box/basic-product-box/basic-product-box.component';
import { ClassicProductBoxComponent } from './components/widgets/product-box/classic-product-box/classic-product-box.component';
import { PremiumProductBoxComponent } from './components/widgets/product-box/premium-product-box/premium-product-box.component';
import { StandardProductBoxComponent } from './components/widgets/product-box/standard-product-box/standard-product-box.component';
import { ProductHoverActionComponent } from './components/widgets/product-box/widgets/product-hover-action/product-hover-action.component';
import { ProductCartButtonComponent } from './components/widgets/product-box/widgets/product-cart-button/product-cart-button.component';
import { SearchDropdownComponent } from './components/header/widgets/search/search-dropdown/search-dropdown.component';
import { SeoHeadingComponent } from './components/seo-heading.component';

// Directives
import { ClickOutsideDirective } from './directive/out-side-directive';

// Pipes
import { TitleCasePipe } from './pipe/title-case.pipe';
import { CurrencySymbolPipe } from './pipe/currency-symbol.pipe';
import { SummaryPipe } from './pipe/summary.pipe';
import { HighlighterPipe } from './pipe/highlighter.pipe';
import { SearchFilterPipe } from './pipe/search-filter.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    MenuComponent,
    HeaderComponent,
    ClassicHeaderComponent,
    StandardHeaderComponent,
    FooterComponent,
    BasicHeaderComponent,
    MinimalHeaderComponent,
    BasicFooterComponent,
    BreadcrumbComponent,
    BreadcrumbDigitalComponent,
    TopbarComponent,
    LogoComponent,
    SearchComponent,
    WishlistComponent,
    CartComponent,
    MyAccountComponent,
    CallComponent,
    CategoriesBlockComponent,
    DealComponent,
    CurrencyComponent,
    LanguageComponent,
    CompareComponent,
    SearchBoxComponent,
    NoticeComponent,
    NavbarMenuButtonComponent,
    FooterLogoComponent,
    FooterCategoriesComponent,
    AboutComponent,
    LinksComponent,
    ContactComponent,
    CopyrightComponent,
    SocialLinksComponent,
    PaymentOptionsComponent,
    FeatherIconsComponent,
    AlertComponent,
    ButtonComponent,
    DeleteModalComponent,
    ConfirmationModalComponent,
    DealsModalComponent,
    AddressModalComponent,
    ChangePasswordModalComponent,
    EditProfileModalComponent,
    ClickOutsideDirective,
    TitleComponent,
    PaginationComponent,
    CategoriesComponent,
    ImageLinkComponent,
    CookieComponent,
    StickyCartComponent,
    ThemeCustomizerComponent,
    StickyCompareComponent,
    RecentPurchasePopupComponent,
    NoDataComponent,
    BackToTopComponent,
    SizeChartModalComponent,
    DeliveryReturnModalComponent,
    ReviewModalComponent,
    QuestionModalComponent,
    VariationModalComponent,
    NewsletterModalComponent,
    ExitModalComponent,
    MobileMenuComponent,
    ProductBoxComponent,
    SkeletonProductBoxComponent,
    ProductBoxVerticalComponent,
    DigitalProductBoxComponent,
    ProductDetailModalComponent,
    RefundModalComponent,
    VariantAttributesComponent,
    SubscribeFooterComponent,
    PayModalComponent,
    LinkBoxComponent,
    TitleCasePipe,
    CurrencySymbolPipe,
    SummaryPipe,
    HighlighterPipe,
    SearchFilterPipe,
    SaleTimerComponent,
    BasicProductBoxComponent,
    ClassicProductBoxComponent,
    PremiumProductBoxComponent,
    StandardProductBoxComponent,
    ProductHoverActionComponent,
    ProductCartButtonComponent,
    SearchDropdownComponent,
    BreadcrumbDigitalComponent,
    SeoHeadingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CarouselModule,
    NgbModule,
    Select2Module,
    SwiperModule,
    TranslateModule,
    
  ],
  providers: [CurrencyPipe],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    BreadcrumbDigitalComponent,
    FeatherIconsComponent,
    AlertComponent,
    ButtonComponent,
    ClickOutsideDirective,
    TitleComponent,
    PaginationComponent,
    NgbModule,
    Select2Module,
    ImageLinkComponent,
    CookieComponent,
    StickyCartComponent,
    ThemeCustomizerComponent,
    StickyCompareComponent,
    RecentPurchasePopupComponent,
    CategoriesComponent,
    NoDataComponent,
    BackToTopComponent,
    DeleteModalComponent,
    ConfirmationModalComponent,
    AddressModalComponent,
    EditProfileModalComponent,
    ChangePasswordModalComponent,
    SizeChartModalComponent,
    DeliveryReturnModalComponent,
    ReviewModalComponent,
    QuestionModalComponent,
    NewsletterModalComponent,
    ExitModalComponent,
    ProductBoxComponent,
    SkeletonProductBoxComponent,
    RefundModalComponent,
    VariantAttributesComponent,
    SubscribeFooterComponent,
    PayModalComponent,
    TitleCasePipe,
    CurrencySymbolPipe,
    SummaryPipe,
    SearchComponent,
    LinkBoxComponent,
    SaleTimerComponent,
    HighlighterPipe,
    SearchFilterPipe,
    BreadcrumbDigitalComponent,
    SeoHeadingComponent
  ]
})
export class SharedModule { }
