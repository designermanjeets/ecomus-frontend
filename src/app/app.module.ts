import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { ToastrModule } from 'ngx-toastr';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import {
  RecaptchaModule,
  RECAPTCHA_SETTINGS,
  RecaptchaSettings,
  RecaptchaFormsModule
} from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

// State
import { LoaderState } from './shared/state/loader.state';
import { AccountState } from './shared/state/account.state';
import { CountryState } from './shared/state/country.state';
import { StateState } from './shared/state/state.state';
import { ThemeState } from './shared/state/theme.state';
import { ThemeOptionState } from './shared/state/theme-option.state';
import { SettingState } from './shared/state/setting.state';
import { CategoryState } from './shared/state/category.state';
import { PageState } from './shared/state/page.state';
import { CurrencyState } from './shared/state/currency.state';
import { AttributeState } from './shared/state/attribute.state';
import { ProductState } from './shared/state/product.state';
import { StoreState } from './shared/state/store.state';
import { CartState } from './shared/state/cart.state';
import { BlogState } from './shared/state/blog.state';
import { TagState } from './shared/state/tag.state';
import { WishlistState } from './shared/state/wishlist.state';
import { CompareState } from './shared/state/compare.state';
import { OrderState } from './shared/state/order.state';
import { OrderStatusState } from './shared/state/order-status.state';
import { WalletState } from './shared/state/wallet.state';
import { PointState } from './shared/state/point.state';
import { RefundState } from './shared/state/refund.state';
import { PaymentDetailsState } from './shared/state/payment-details.state';
import { NotificationState } from './shared/state/notification.state';
import { QuestionAnswersState } from './shared/state/questions-answers.state';
import { ReviewState } from './shared/state/review.state';
import { CouponState } from './shared/state/coupon.state';
import { BrandState } from './shared/state/brand.state';
import { DownloadState } from './shared/state/download.state';
import { MenuState } from './shared/state/menu.state';
import { SubscriptionState } from './shared/state/subscription.state';

import { SettingService } from './shared/services/setting.service';
import { SeoService } from './shared/services/seo.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

function appLoadFactory(config: SettingService) {
  return () => config.getReCaptchaConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      LoaderState,
      AccountState,
      CountryState,
      StateState,
      SettingState,
      CurrencyState,
      ThemeState,
      ThemeOptionState,
      CategoryState,
      PageState,
      AttributeState,
      ProductState,
      StoreState,
      CartState,
      BlogState,
      TagState,
      WishlistState,
      CompareState,
      OrderState,
      OrderStatusState,
      WalletState,
      PointState,
      RefundState,
      PaymentDetailsState,
      NotificationState,
      QuestionAnswersState,
      ReviewState,
      CouponState,
      MenuState,
      SubscriptionState,
      BrandState,
      DownloadState
    ]),
    NgxsStoragePluginModule.forRoot({
      key: [
        'auth',
        'account',
        'country',
        'state',
        'cart',
        'theme',
        'theme_option',
        'setting',
        'notification'
      ]
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      preventDuplicates: true
    }),
    SharedModule,
    CoreModule,
    LoadingBarRouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useFactory: (config: SettingService): RecaptchaSettings => {
        return { siteKey: config.reCaptchaConfig?.site_key };
      },
      deps: [SettingService],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appLoadFactory,
      deps: [SettingService],
      multi: true,
    },
    SeoService,
    Meta,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
