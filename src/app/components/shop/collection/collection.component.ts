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
import { Title, Meta } from '@angular/platform-browser';
 
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
    'paginate': 40,
    'status': 1,
    'field': 'created_at',
    'price': '',
    'category': '',
    'tag': '',
    'sort': 'asc', // ASC, DSC
    'sortBy': 'asc',
    'rating': '',
    'attribute': '',
    store_id: 19,
  };

  public totalItems: number = 0;

  constructor(private route: ActivatedRoute,
    private store: Store,
    private title: Title,
    private meta: Meta) {

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
        store_id: 19,
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

      // Set SEO meta tags and breadcrumb based on category
      const category = this.filter['category'];
      if (category) {
        this.setCategorySEO(category);
      } else {
        this.setDefaultSEO();
      }
    });
    this.product$.subscribe(product => this.totalItems = product?.total);
  }

  /**
   * Set category-specific SEO meta tags
   */
  private setCategorySEO(category: string): void {
    const categoryLower = category.toLowerCase();
    let title = '';
    let description = '';
    let keywords = '';
    
    switch (categoryLower) {
      case 'activewear':
        title = 'Activewear Collection | Gym Wear, Sportswear & Fitness Clothes | Stylexio';
        description = 'Shop premium activewear and sportswear at Stylexio. Find high-quality gym wear, fitness clothes, yoga pants, sports bras, and athletic wear for men & women. Perfect for workouts, running, and active lifestyle.';
        keywords = 'activewear, gym wear, sportswear, fitness clothes, workout clothes, yoga pants, sports bras, athletic wear, running clothes, exercise wear, gym clothes, fitness apparel, Stylexio';
        break;

      case 'men':
        title = 'Mens Clothing Collection Stylexio';
        description = 'Explore mens shirts jackets suits jeans and more at Stylexio. New arrivals fast PAN India delivery COD and easy 7 day returns.';
        keywords = 'men\'s clothes, men\'s fashion, men\'s clothing, men\'s apparel, men\'s shirts, men\'s pants, men\'s jeans, men\'s jackets, men\'s casual wear, men\'s formal clothes, stylish men\'s fashion, Stylexio';
        break;

      case 'women':
        title = 'Women\'s Clothing Collection | Fashionable Women\'s Apparel & Style | Stylexio';
        description = 'Explore stunning women\'s clothing and fashion at Stylexio. Shop trendy women\'s fashion including dresses, tops, jeans, skirts, women\'s casual wear, formal clothes, and stylish women\'s apparel. Fashion that makes you feel confident.';
        keywords = 'women\'s clothes, women\'s fashion, women\'s clothing, women\'s apparel, women\'s dresses, women\'s tops, women\'s jeans, women\'s skirts, women\'s casual wear, women\'s formal clothes, stylish women\'s fashion, Stylexio';
        break;

      default:
        title = `${category.charAt(0).toUpperCase() + category.slice(1)} Collection | Stylexio Fashion Store`;
        description = `Shop ${category} collection at Stylexio. Discover trendy fashion, quality clothing, and stylish apparel for every occasion.`;
        keywords = `${category}, fashion, clothing, apparel, Stylexio, trendy style`;
        break;
    }

    // Force title update using multiple methods to ensure it works
    this.forceUpdateTitle(title);
    
    // Update meta tags
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: `https://stylexio.in/collections/${category}` });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    // Update canonical URL
    this.meta.updateTag({ rel: 'canonical', href: `https://stylexio.in/collections/${category}` });
    
    // Update breadcrumb
    this.breadcrumb.title = `${category.charAt(0).toUpperCase() + category.slice(1)} Collection`;
    this.breadcrumb.items = [
      { label: 'Home', active: false },
      { label: 'Collections', active: false },
      { label: category.charAt(0).toUpperCase() + category.slice(1), active: true }
    ];
  }

  /**
   * Set default SEO meta tags for collections page
   */
  private setDefaultSEO(): void {
    const title = 'Shop Collections | Activewear, Men\'s & Women\'s Fashion | Stylexio';
    const description = 'Explore our curated collections at Stylexio. Shop activewear, men\'s clothing, women\'s fashion, and more. Find the perfect style for every occasion with our quality fashion collections.';
    const keywords = 'collections, activewear, men\'s clothes, women\'s clothes, fashion collections, stylish clothing, Stylexio collections';

    // Force title update
    this.forceUpdateTitle(title);
    
    // Update meta tags
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: 'https://stylexio.in/collections' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ rel: 'canonical', href: 'https://stylexio.in/collections' });
    
    // Reset breadcrumb to default
    this.breadcrumb.title = 'Collections';
    this.breadcrumb.items = [
      { label: 'Home', active: false },
      { label: 'Collections', active: true }
    ];
  }

  /**
   * Force update title using multiple methods to ensure it works consistently
   */
  private forceUpdateTitle(title: string): void {
    // Method 1: Angular Title service
    this.title.setTitle(title);
    
    // Method 2: Update meta title tag as backup
    this.meta.updateTag({ name: 'title', content: title });
    
    // Method 3: Direct DOM manipulation
    document.title = title;
    
    // Method 4: Force update with setTimeout to ensure it takes effect
    setTimeout(() => {
      this.title.setTitle(title);
      document.title = title;
    }, 0);
    
    // Method 5: Additional timeout for browser compatibility
    setTimeout(() => {
      this.title.setTitle(title);
      document.title = title;
    }, 100);
  }
}
