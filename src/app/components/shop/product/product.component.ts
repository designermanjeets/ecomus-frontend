import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Breadcrumb } from '../../../shared/interface/breadcrumb';
import { Product } from '../../../shared/interface/product.interface';
import { ProductState } from '../../../shared/state/product.state';
import { ThemeOptionState } from '../../../shared/state/theme-option.state';
import { Option } from '../../../shared/interface/theme-option.interface';
import { SeoService } from '../../../shared/services/seo.service';
import { PRODUCT_META_DATA, ProductMetaData } from '../../../shared/data/product-meta-data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

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

  constructor(
    private route: ActivatedRoute,
    private seoService: SeoService
  ) {
    const productSub = this.product$.subscribe(product => {
      this.product = product;
      
      // 🎯 ADD META DATA FROM MAPPING
      if (product && PRODUCT_META_DATA[product.id]) {
        const metaData: ProductMetaData = PRODUCT_META_DATA[product.id];
        product.meta_title = metaData.meta_title;
        product.meta_description = metaData.meta_description;
        product.meta_keywords = metaData.meta_keywords;
        product.canonical_url = metaData.canonical_url;
        console.log('🎯 Applied meta data from mapping for product ID:', product.id);
      }
      
      this.breadcrumb.items = [];
      this.breadcrumb.title = product?.name || 'Product';
      this.breadcrumb.items.push(
        { label: 'Product', active: true },
        { label: product?.name || '', active: false }
      );
      // Set SEO data when product is loaded
      if (product) {
        this.setProductSEO(product);
      }
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

  ngOnInit(): void {
    // Component initialization
  }

  /**
   * Set SEO data for the current product
   * This method allows you to customize meta title and description for each product
   */
  private setProductSEO(product: Product): void {
    // Get product slug from route (can be null)
    const productSlug = this.route.snapshot.paramMap.get('slug');
    
    // Debug logging
    console.log('🔍 Setting SEO for product:', product.name);
    console.log('📝 Custom meta title:', product.meta_title);
    console.log('📝 Custom meta description:', product.meta_description);
    console.log('📝 Product description:', product.description);
    console.log('📝 Product short description:', product.short_description);
    console.log('🔗 Product slug:', productSlug);
    console.log('🔍 Full product object:', product);
    
    // Use the SeoService method for product pages
    // SeoService will handle null slug with fallback logic
    this.seoService.setProductPageSEO(product, productSlug);
    
    // Force update SEO data to override any conflicting SEO
    setTimeout(() => {
      this.forceProductSEOUpdate(product, productSlug);
    }, 100);
    
    // Additional force updates with longer delays
    setTimeout(() => {
      this.forceProductSEOUpdate(product, productSlug);
    }, 500);
    
    setTimeout(() => {
      this.forceProductSEOUpdate(product, productSlug);
    }, 1000);
    
    // Final aggressive update after everything has loaded
    setTimeout(() => {
      this.finalAggressiveUpdate(product, productSlug);
    }, 2000);
  }

  /**
   * Force update product SEO to ensure it overrides other SEO
   */
  private forceProductSEOUpdate(product: Product, productSlug: string | null): void {
    const slug = productSlug || product.slug || `product-${product.id}`;
    const baseUrl = 'https://stylexio.in';
    const productUrl = `${baseUrl}/product/${slug}`;

    // Use custom meta data if available, otherwise generate from product data
    const metaTitle = product.meta_title || this.generateProductTitle(product);
    const metaDescription = product.meta_description || this.generateProductDescription(product);
    const metaKeywords = product.meta_keywords || this.generateProductKeywords(product);

    console.log('🚀 Force updating SEO with:');
    console.log('📝 Title:', metaTitle);
    console.log('📝 Description:', metaDescription);

    // Use aggressive clear and set method
    this.seoService.aggressiveClearAndSet({
      title: metaTitle,
      description: metaDescription,
      keywords: metaKeywords,
      image: product.product_thumbnail?.original_url || product.product_galleries?.[0]?.original_url,
      url: productUrl,
      canonicalUrl: product.canonical_url || productUrl,
      type: 'product',
      author: 'Stylexio'
    });
    
    // Additional aggressive description update
    this.forceDescriptionUpdate(metaDescription);
  }

  /**
   * Generate SEO-friendly title for the product
   */
  private generateProductTitle(product: Product): string {
    const brand = product.brand?.name ? `${product.brand.name} ` : '';
    const category = product.categories?.[0]?.name ? ` ${product.categories[0].name}` : '';
    const price = product.sale_price ? `₹${product.sale_price}` : `₹${product.price}`;
    
    return `${brand}${product.name}${category} - ${price} | Stylexio`;
  }

  /**
   * Generate SEO-friendly description for the product
   */
  private generateProductDescription(product: Product): string {
    const brand = product.brand?.name ? `${product.brand.name} ` : '';
    const category = product.categories?.[0]?.name ? ` ${product.categories[0].name}` : '';
    const price = product.sale_price ? `₹${product.sale_price}` : `₹${product.price}`;
    const discount = product.discount > 0 ? ` Save ${product.discount}%!` : '';
    
    // Use product description or short description, fallback to generated
    const description = product.description || product.short_description || 
      `Shop ${brand}${product.name}${category} online at Stylexio. Premium quality, great prices, fast delivery.${discount}`;
    
    // Limit description to 160 characters for SEO
    return description.length > 160 ? description.substring(0, 157) + '...' : description;
  }

  /**
   * Generate SEO keywords for the product
   */
  private generateProductKeywords(product: Product): string {
    const keywords = [];
    
    // Add product name
    keywords.push(product.name);
    
    // Add brand
    if (product.brand?.name) {
      keywords.push(product.brand.name);
    }
    
    // Add categories
    if (product.categories) {
      product.categories.forEach(category => {
        keywords.push(category.name);
      });
    }
    
    // Add tags
    if (product.tags) {
      product.tags.forEach(tag => {
        keywords.push(tag.name);
      });
    }
    
    // Add generic keywords
    keywords.push('buy online', 'Stylexio', 'fashion', 'clothing');
    
    return keywords.join(', ');
  }

  /**
   * Force update description meta tags with aggressive overwriting
   */
  private forceDescriptionUpdate(description: string): void {
    console.log('🔥 Force updating description:', description);
    
    // Import Meta service for direct access
    const meta = this.seoService['meta'];
    
    // Multiple immediate updates
    meta.updateTag({ name: 'description', content: description });
    meta.updateTag({ property: 'og:description', content: description });
    meta.updateTag({ name: 'twitter:description', content: description });
    
    // Multiple delayed updates
    setTimeout(() => {
      meta.updateTag({ name: 'description', content: description });
      meta.updateTag({ property: 'og:description', content: description });
      meta.updateTag({ name: 'twitter:description', content: description });
      console.log('🔥 Description updated at 100ms');
    }, 100);
    
    setTimeout(() => {
      meta.updateTag({ name: 'description', content: description });
      meta.updateTag({ property: 'og:description', content: description });
      meta.updateTag({ name: 'twitter:description', content: description });
      console.log('🔥 Description updated at 300ms');
    }, 300);
    
    setTimeout(() => {
      meta.updateTag({ name: 'description', content: description });
      meta.updateTag({ property: 'og:description', content: description });
      meta.updateTag({ name: 'twitter:description', content: description });
      console.log('🔥 Description updated at 600ms');
    }, 600);
    
    setTimeout(() => {
      meta.updateTag({ name: 'description', content: description });
      meta.updateTag({ property: 'og:description', content: description });
      meta.updateTag({ name: 'twitter:description', content: description });
      console.log('🔥 Description updated at 1000ms');
    }, 1000);
  }

  /**
   * Final aggressive update that runs after all other components
   */
  private finalAggressiveUpdate(product: Product, productSlug: string | null): void {
    console.log('🔥 FINAL AGGRESSIVE UPDATE - Overriding everything');
    
    const slug = productSlug || product.slug || `product-${product.id}`;
    const baseUrl = 'https://stylexio.in';
    const productUrl = `${baseUrl}/product/${slug}`;
    const metaTitle = product.meta_title || this.generateProductTitle(product);
    const metaDescription = product.meta_description || this.generateProductDescription(product);
    
    // Direct DOM manipulation as last resort
    const titleElement = document.querySelector('title');
    if (titleElement) {
      titleElement.textContent = metaTitle;
    }
    
    // Remove all existing meta tags by selector
    const metaSelectors = [
      'meta[name="description"]',
      'meta[property="og:description"]',
      'meta[name="twitter:description"]',
      'meta[property="og:title"]',
      'meta[name="twitter:title"]',
      'meta[property="og:url"]',
      'meta[name="twitter:url"]'
    ];
    
    metaSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => el.remove());
    });
    
    // Add new meta tags directly to DOM
    const head = document.head;
    
    // Description meta tags
    const descriptionMeta = document.createElement('meta');
    descriptionMeta.setAttribute('name', 'description');
    descriptionMeta.setAttribute('content', metaDescription);
    head.appendChild(descriptionMeta);
    
    const ogDescriptionMeta = document.createElement('meta');
    ogDescriptionMeta.setAttribute('property', 'og:description');
    ogDescriptionMeta.setAttribute('content', metaDescription);
    head.appendChild(ogDescriptionMeta);
    
    const twitterDescriptionMeta = document.createElement('meta');
    twitterDescriptionMeta.setAttribute('name', 'twitter:description');
    twitterDescriptionMeta.setAttribute('content', metaDescription);
    head.appendChild(twitterDescriptionMeta);
    
    // Title meta tags
    const ogTitleMeta = document.createElement('meta');
    ogTitleMeta.setAttribute('property', 'og:title');
    ogTitleMeta.setAttribute('content', metaTitle);
    head.appendChild(ogTitleMeta);
    
    const twitterTitleMeta = document.createElement('meta');
    twitterTitleMeta.setAttribute('name', 'twitter:title');
    twitterTitleMeta.setAttribute('content', metaTitle);
    head.appendChild(twitterTitleMeta);
    
    // URL meta tags
    const ogUrlMeta = document.createElement('meta');
    ogUrlMeta.setAttribute('property', 'og:url');
    ogUrlMeta.setAttribute('content', productUrl);
    head.appendChild(ogUrlMeta);
    
    const twitterUrlMeta = document.createElement('meta');
    twitterUrlMeta.setAttribute('name', 'twitter:url');
    twitterUrlMeta.setAttribute('content', productUrl);
    head.appendChild(twitterUrlMeta);
    
    console.log('🔥 FINAL UPDATE COMPLETE - Meta tags set via DOM manipulation');
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
