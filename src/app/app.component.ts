
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Actions, Select, Store, ofActionDispatched } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ThemeOptionState } from './shared/state/theme-option.state';
import { Option } from './shared/interface/theme-option.interface';
import { GetThemeOption } from './shared/action/theme-option.action';
import { GetCurrencies } from './shared/action/currency.action';
import { GetStates } from './shared/action/state.action';
import { GetCountries } from './shared/action/country.action';
import { GetCartItems } from './shared/action/cart.action';
import { GetSettingOption } from './shared/action/setting.action';

import { Logout } from './shared/action/auth.action';
import { SeoService } from './shared/services/seo.service';
import { GetThemes } from './shared/action/theme.action';
import { ThemeOptionService } from './shared/services/theme-option.service';
import { SettingState } from './shared/state/setting.state';
import { Values, Analytics } from './shared/interface/setting.interface';
import { TranslateService } from '@ngx-translate/core';
import { PlaceOrder } from './shared/action/order.action';
import { CartService } from './shared/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Select(ThemeOptionState.themeOptions) themeOption$: Observable<Option>;
  @Select(SettingState.setting) setting$: Observable<Values>;

  public favIcon: HTMLLinkElement | null;
  public isTabInFocus = true;

  constructor(@Inject(DOCUMENT) document: Document,
    config: NgbRatingConfig, private actions: Actions,
    private router: Router,
    private store: Store,
    public seoService: SeoService,
    private translate: TranslateService,
    private cartService: CartService
  ) {

    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
 
    // this.seoService.seo();
    config.max = 5;
    config.readonly = true;

    this.store.dispatch(new GetCountries());
    this.store.dispatch(new GetStates());
    this.store.dispatch(new GetCartItems());
    this.store.dispatch(new GetSettingOption());
    this.store.dispatch(new GetThemeOption());
    this.store.dispatch(new GetCurrencies({ status: 1 }));
    this.store.dispatch(new GetThemes());

    this.themeOption$.subscribe(theme => {
      if(theme?.general?.mode === 'dark') {
        document.getElementsByTagName('html')[0].classList.add(theme?.general && theme?.general?.mode)
      } else {
        document.getElementsByTagName('html')[0].classList.remove('dark')
      }

      // Set Direction
      if(theme?.general?.language_direction === 'rtl'){
        document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
        document.body.classList.add('rtl');
      } else {
        document.getElementsByTagName('html')[0].removeAttribute('dir');
        document.body.classList.remove('rtl');  
      }

      // Set Favicon
      this.favIcon = document.querySelector('#appIcon');
      this.favIcon!.href = theme?.logo?.favicon_icon?.original_url;
            
    });

    this.setting$.subscribe(option => {
      if(option?.analytics){
        if(option?.analytics?.google_analytics && option?.analytics?.google_analytics.status){
          this.loadScript(option?.analytics);
        }
      }
    })

    this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => {
      this.router.navigate(['/auth/login']);
    });
    
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        if(event.url.includes('/success')){
          console.log('Coming After Payment Successfully or Failed');
          setTimeout(() => {
            const getOrderId = localStorage.getItem('order_id');
            if(getOrderId){
              this.router.navigate(['/account/order/details', getOrderId]);
            }
          }, 500);
        }
      }
    });

  }

  ngOnInit() {
    // Set default SEO data
    this.seoService.updateDefaultSeo();
  }

  loadScript(val: Analytics): void {
    if(val.google_analytics.status){
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${val.google_analytics.measurement_id}`;
      document.head.appendChild(script);
  
      const configScript = document.createElement('script');
      configScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${val.google_analytics.measurement_id}');
      `;
      document.head.appendChild(configScript);
    }

    if(val.facebook_pixel.status){
      const script = document.createElement('script');
      script.src = `https://www.facebook.com/tr?id=${val.facebook_pixel.pixel_id}`;
      document.head.appendChild(script);
  
      const configScript = document.createElement('script');
      configScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${val.facebook_pixel.pixel_id}');
      fbq('track', 'PageView');
      `;
      document.head.appendChild(configScript);
    }
  }

}