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
        console.log('🎯 Meta title set to:', product.meta_title);
        console.log('🎯 Meta description set to:', product.meta_description);
      } else if (product) {
        console.log('❌ No meta data found for product ID:', product.id);
        console.log('❌ Available meta data IDs:', Object.keys(PRODUCT_META_DATA));
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
    console.log('🔗 Product ID:', product.id);
    
    // Use the SeoService method for product pages
    this.seoService.setProductPageSEO(product, productSlug);
    
    // Multiple delayed updates to ensure it overrides default SEO
    setTimeout(() => {
      this.forceProductSEOUpdate(product, productSlug);
    }, 50);
    
    setTimeout(() => {
      this.forceProductSEOUpdate(product, productSlug);
    }, 200);
    
    setTimeout(() => {
      this.forceProductSEOUpdate(product, productSlug);
    }, 500);
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

    // Use the most aggressive update method available
    this.seoService.forceUpdateSEOData({
      title: metaTitle,
      description: metaDescription,
      keywords: metaKeywords,
      image: product.product_thumbnail?.original_url || product.product_galleries?.[0]?.original_url,
      url: productUrl,
      canonicalUrl: product.canonical_url || productUrl,
      type: 'product',
      author: 'Stylexio'
    });
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
    const discount = product.discount > 0 ? ` Save ${product.discount}%!` : '';

    // Priority: custom meta > short_description > description > fallback template
    let rawDescription: string = product.meta_description
      || product.short_description
      || product.description
      || `Shop ${brand}${product.name}${category} online at Stylexio. Premium quality, great prices, fast delivery.${discount}`;

    // Sanitize sizing/measurement notes and HTML, normalize whitespace
    rawDescription = this.stripHtmlTags(this.sanitizeProductDescription(rawDescription));

    // Limit description to 160 characters for SEO
    return rawDescription.length > 160 ? rawDescription.substring(0, 157) + '...' : rawDescription;
  }

  // Remove sizing/measurement notes that are not suitable for meta descriptions
  private sanitizeProductDescription(text: string): string {
    if (!text) return '';
    let sanitized = text;

    const patterns: RegExp[] = [
      /model\s*height[^\.!\n]*/gi,
      /wearing\s*(size|small|medium|large|xl|xxl|xxxl|xs)[^\.!\n]*/gi,
      /bust\s*[:\-]?\s*\d+\s*(cm|inch|in|')/gi,
      /waist\s*[:\-]?\s*\d+\s*(cm|inch|in|')/gi,
      /hips?\s*[:\-]?\s*\d+\s*(cm|inch|in|')/gi,
      /\b\d{1,2}\s*(cm|inch|in)\b/gi,
      /\b\d'\d{1,2}\b/gi,
      /size\s*chart[^\.!\n]*/gi,
    ];

    patterns.forEach((re) => {
      sanitized = sanitized.replace(re, '');
    });

    sanitized = sanitized.replace(/\s{2,}/g, ' ').replace(/\s([\.,;:!\?])/g, '$1').trim();

    if (!sanitized) {
      sanitized = 'Premium quality, great prices, fast delivery from Stylexio.';
    }

    return sanitized;
  }

  private stripHtmlTags(html: string): string {
    if (!html) return '';
    const temp = document.createElement('div');
    temp.innerHTML = html;
    let text = temp.textContent || (temp as any).innerText || '';
    text = text.replace(/\s+/g, ' ').trim();
    if (text.length > 160) {
      text = text.substring(0, 157) + '...';
    }
    return text;
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

