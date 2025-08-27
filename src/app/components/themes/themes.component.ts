import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, Select  } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ThemeState } from '../../shared/state/theme.state';
import { GetHomePage } from '../../shared/action/theme.action';
import { ThemeOptionService } from '../../shared/services/theme-option.service';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  @Select(ThemeState.homePage) homePage$: Observable<string>;
  @Select(ThemeState.activeTheme) activeTheme$: Observable<string>;

  public theme: string;
  public homePage: any;

  constructor(private store: Store,
    private route: ActivatedRoute,
    private themeOptionService: ThemeOptionService,
    private seoService: SeoService) {
      this.route.queryParams.subscribe(params => {
        this.themeOptionService.preloader = true;
        this.activeTheme$.subscribe(theme => {
          this.theme = params['theme'] ? params['theme'] : theme;
          this.store.dispatch(new GetHomePage(params['theme'] ? params['theme'] : theme)).subscribe(data => {
            this.homePage = data.theme.homePage;
            this.themeOptionService.preloader = false;
          });
        })
    });

    document.body.classList.add('home');
  }

  ngOnInit() {
    // Set SEO data for homepage
    this.seoService.updateDefaultSeo();
    
    // Set additional homepage-specific SEO data
    this.seoService.setSEOData({
      canonicalUrl: 'https://stylexio.in/',
      url: 'https://stylexio.in/',
      image: 'https://stylexio.in/assets/images/hero-banner.jpg'
    });
  }
  
  ngOnDestroy(){
    document.body.classList.remove('home');
  }
}
