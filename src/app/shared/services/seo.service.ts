
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  canonicalUrl?: string; // Add canonical URL support
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: any;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) { }

  /**
   * Set comprehensive SEO data including meta tags and structured data
   * Works on both server and client side
   */
  setSEOData(data: SEOData): void {
    // Set title
    if (data.title) {
      this.title.setTitle(data.title);
      // Also set meta title tag for better compatibility
      this.meta.updateTag({ name: 'title', content: data.title });
      
      // For SSR compatibility, also set document title directly
      if (isPlatformServer(this.platformId)) {
        this.document.title = data.title;
      }
    }

    // Set meta tags
    if (data.description) {
      // Strip HTML tags from description
      const cleanDescription = this.stripHtmlTags(data.description);
      console.log('🔍 Setting meta description:', cleanDescription);
      
      // Update meta tags using Angular Meta service
      this.meta.updateTag({ name: 'description', content: cleanDescription });
      this.meta.updateTag({ property: 'og:description', content: cleanDescription });
      this.meta.updateTag({ name: 'twitter:description', content: cleanDescription });
      
      // For SSR compatibility, also set meta tags directly in document
      if (isPlatformServer(this.platformId)) {
        this.setMetaTagDirectly('description', cleanDescription);
        this.setMetaTagDirectly('og:description', cleanDescription, 'property');
        this.setMetaTagDirectly('twitter:description', cleanDescription);
      }
      
      console.log('✅ Meta description tags updated');
    } else {
      console.log('❌ No description provided to setSEOData');
    }

    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
      if (isPlatformServer(this.platformId)) {
        this.setMetaTagDirectly('keywords', data.keywords);
      }
    }

    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
      this.meta.updateTag({ name: 'twitter:image', content: data.image });
      if (isPlatformServer(this.platformId)) {
        this.setMetaTagDirectly('og:image', data.image, 'property');
        this.setMetaTagDirectly('twitter:image', data.image);
      }
    }

    if (data.url) {
      this.meta.updateTag({ property: 'og:url', content: data.url });
      this.meta.updateTag({ name: 'twitter:url', content: data.url });
      if (isPlatformServer(this.platformId)) {
        this.setMetaTagDirectly('og:url', data.url, 'property');
        this.setMetaTagDirectly('twitter:url', data.url);
      }
    }

    // Set Open Graph title
    if (data.title) {
      this.meta.updateTag({ property: 'og:title', content: data.title });
      this.meta.updateTag({ name: 'twitter:title', content: data.title });
      if (isPlatformServer(this.platformId)) {
        this.setMetaTagDirectly('og:title', data.title, 'property');
        this.setMetaTagDirectly('twitter:title', data.title);
      }
    }

    // Set canonical URL - this is crucial for SEO!
    if (data.canonicalUrl) {
      this.setCanonicalUrl(data.canonicalUrl);
    } else if (data.url) {
      // If no canonical URL specified, use the main URL
      this.setCanonicalUrl(data.url);
    }

    if (data.type) {
      this.meta.updateTag({ property: 'og:type', content: data.type });
    }

    if (data.author) {
      this.meta.updateTag({ name: 'author', content: data.author });
      this.meta.updateTag({ property: 'og:author', content: data.author });
    }

    if (data.publishedTime) {
      this.meta.updateTag({ property: 'article:published_time', content: data.publishedTime });
    }

    if (data.modifiedTime) {
      this.meta.updateTag({ property: 'article:modified_time', content: data.modifiedTime });
    }

    if (data.section) {
      this.meta.updateTag({ property: 'article:section', content: data.section });
    }

    if (data.tags && data.tags.length > 0) {
      data.tags.forEach(tag => {
        this.meta.addTag({ property: 'article:tag', content: tag });
      });
    }

    // Set structured data
    if (data.structuredData) {
      this.setStructuredData(data.structuredData);
    }
  }

  /**
   * Set canonical URL - prevents duplicate content issues
   * Works on both server and client side
   */
  setCanonicalUrl(url: string): void {
    // Remove existing canonical tags
    this.meta.removeTag('rel="canonical"');
    
    // Add new canonical tag
    this.meta.addTag({ rel: 'canonical', href: url });
    
    // For SSR compatibility, also set canonical tag directly in document
    if (isPlatformServer(this.platformId)) {
      let canonicalTag = this.document.querySelector('link[rel="canonical"]');
      if (canonicalTag) {
        canonicalTag.setAttribute('href', url);
      } else {
        canonicalTag = this.document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        canonicalTag.setAttribute('href', url);
        this.document.head.appendChild(canonicalTag);
      }
    }
    
    // Also update Open Graph URL for social media
    this.meta.updateTag({ property: 'og:url', content: url });
  }

  /**
   * Remove canonical URL (useful for dynamic pages)
   */
  removeCanonicalUrl(): void {
    this.meta.removeTag('rel="canonical"');
  }

  /**
   * Set structured data (JSON-LD)
   */
  setStructuredData(data: any): void {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /**
   * Set product structured data
   */
  setProductStructuredData(product: any): void {
    // Build image array properly
    const images: string[] = [];
    if (product.product_thumbnail?.original_url) {
      images.push(product.product_thumbnail.original_url);
    }
    if (product.product_galleries && product.product_galleries.length > 0) {
      product.product_galleries.forEach((gallery: any) => {
        if (gallery.original_url && !images.includes(gallery.original_url)) {
          images.push(gallery.original_url);
        }
      });
    }

    const structuredData: any = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": product.description || product.short_description,
      "sku": product.sku,
      "image": images.length > 0 ? images : undefined,
      "brand": {
        "@type": "Brand",
        "name": product.brand?.name || "Stylexio"
      },
      "offers": {
        "@type": "Offer",
        "price": product.sale_price || product.price,
        "priceCurrency": product.currency || "INR",
        "availability": product.stock_status === 'in_stock' ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        "url": product.url,
        "itemCondition": "https://schema.org/NewCondition",
        "seller": {
          "@type": "Organization",
          "name": "Stylexio"
        }
      }
    };

    if (product.aggregateRating) {
      structuredData.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": product.aggregateRating.rating,
        "reviewCount": product.aggregateRating.reviewCount
      };
    }

    this.setStructuredData(structuredData);
  }

  /**
   * Set organization structured data
   */
  setOrganizationStructuredData(): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Ecomus",
      "url": "https://stylexio.in",
      "logo": "https://stylexio.in/assets/images/logo.png",
      "sameAs": [
        "https://facebook.com/ecomus",
        "https://twitter.com/ecomus",
        "https://instagram.com/ecomus"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service"
      }
    };

    this.setStructuredData(structuredData);
  }

  /**
   * Set breadcrumb structured data
   */
  setBreadcrumbStructuredData(breadcrumbs: Array<{name: string, url: string}>): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };

    this.setStructuredData(structuredData);
  }

  /**
   * Set article structured data
   */
  setArticleStructuredData(article: any): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.description,
      "image": article.image,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Ecomus",
        "logo": {
          "@type": "ImageObject",
          "url": "https://stylexio.in/assets/images/logo.png"
        }
      },
      "datePublished": article.publishedDate,
      "dateModified": article.modifiedDate
    };

    this.setStructuredData(structuredData);
  }

  /**
   * Clear all meta tags
   */
  clearMetaTags(): void {
    this.meta.removeTag('name="description"');
    this.meta.removeTag('name="keywords"');
    this.meta.removeTag('name="author"');
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:description"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:url"');
    this.meta.removeTag('property="og:type"');
    this.meta.removeTag('name="twitter:title"');
    this.meta.removeTag('name="twitter:description"');
    this.meta.removeTag('name="twitter:image"');
    this.meta.removeTag('name="twitter:url"');
  }

  /**
   * Aggressively clear and replace meta tags
   * FIX: Use updateTag instead of addTag to properly handle existing meta tags
   */
  aggressiveClearAndSet(data: SEOData): void {
    // Don't remove tags - just update them in place
    // This is more reliable than removing and re-adding
    
    // Set new meta tags using updateTag (creates if doesn't exist, updates if exists)
    if (data.title) {
      this.title.setTitle(data.title);
      this.meta.updateTag({ name: 'title', content: data.title });
      this.meta.updateTag({ property: 'og:title', content: data.title });
      this.meta.updateTag({ name: 'twitter:title', content: data.title });
    }
    
    if (data.description) {
      const cleanDescription = this.stripHtmlTags(data.description);
      console.log('🔥 Aggressive update - Setting meta description:', cleanDescription);
      
      // First try to update existing tag
      this.meta.updateTag({ name: 'description', content: cleanDescription });
      this.meta.updateTag({ property: 'og:description', content: cleanDescription });
      this.meta.updateTag({ name: 'twitter:description', content: cleanDescription });
      
      // If updateTag doesn't work, force create the tag directly
      setTimeout(() => {
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
          console.log('🔧 Meta description tag missing, creating it...');
          metaDesc = document.createElement('meta');
          metaDesc.setAttribute('name', 'description');
          document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', cleanDescription);
        
        // Also ensure Open Graph description exists
        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (!ogDesc) {
          ogDesc = document.createElement('meta');
          ogDesc.setAttribute('property', 'og:description');
          document.head.appendChild(ogDesc);
        }
        ogDesc.setAttribute('content', cleanDescription);
        
        console.log('✅ Meta description forcefully set:', cleanDescription.substring(0, 50) + '...');
      }, 50);
      
    } else {
      console.log('❌ No description provided to aggressiveClearAndSet');
    }
    
    if (data.url) {
      this.meta.updateTag({ property: 'og:url', content: data.url });
      this.meta.updateTag({ name: 'twitter:url', content: data.url });
    }
    
    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
      this.meta.updateTag({ name: 'twitter:image', content: data.image });
    }
    
    if (data.type) {
      this.meta.updateTag({ property: 'og:type', content: data.type });
    }
    
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }
  }

  /**
   * Update default SEO settings
   */
  updateDefaultSeo(): void {
    // Check if we're on a product page - if so, don't override
    const currentUrl = window.location.pathname;
    if (currentUrl.includes('/product/')) {
      console.log('🚫 Skipping default SEO update - on product page');
      return;
    }
    
    // Additional check: if we're on any product-related page, don't override
    if (currentUrl.includes('/product') || currentUrl.includes('/collections')) {
      console.log('🚫 Skipping default SEO update - on product/collection page');
      return;
    }
    
    console.log('✅ Setting default SEO for non-product page:', currentUrl);
    this.setSEOData({
      title: 'Stylexio Premium Mens and Womens Fashion Online',
      description: 'Discover new season shirts jackets suits denim and more at Stylexio. Premium quality fast shipping across India COD and easy returns.',
      keywords: 'activewear, gym wear, joggers, men\'s clothes, women\'s clothes, stylish outfits, comfort fit, performance clothing, Stylexio',
      type: 'website',
      url: 'https://stylexio.in/'
    });
  }

  /**
   * Force update meta tags (for SSR compatibility)
   */
  forceUpdateMetaTags(): void {
    // This method ensures meta tags are properly set for SSR
    setTimeout(() => {
      this.updateDefaultSeo();
    }, 100);
  }

  /**
   * Set SEO data specifically for product pages
   * This method provides a convenient way to set all product-related SEO data
   */
  setProductPageSEO(product: any, productSlug: string | null, baseUrl: string = 'https://stylexio.in'): void {
    // Handle null/undefined slug
    const slug = productSlug || product.slug || `product-${product.id}`;
    const productUrl = `${baseUrl}/product/${slug}`;
    
    // Use custom meta data if available, otherwise generate from product data
    const metaTitle = product.meta_title || this.generateProductTitle(product);
    const metaDescription = product.meta_description || this.generateProductDescription(product);
    const metaKeywords = product.meta_keywords || this.generateProductKeywords(product);

    // Set comprehensive SEO data
    this.setSEOData({
      title: metaTitle,
      description: metaDescription,
      keywords: metaKeywords,
      image: product.product_thumbnail?.original_url || product.product_galleries?.[0]?.original_url,
      url: productUrl,
      canonicalUrl: product.canonical_url || productUrl,
      type: 'product',
      author: 'Stylexio'
    });

    // Set product structured data for rich snippets
    this.setProductStructuredData({
      ...product,
      url: productUrl,
      currency: 'INR',
      aggregateRating: product.reviews_count > 0 ? {
        rating: this.calculateAverageRating(product.review_ratings),
        reviewCount: product.reviews_count
      } : undefined
    });

    // Set breadcrumb structured data
    const breadcrumbs = [
      { name: 'Home', url: baseUrl },
      { name: 'Products', url: `${baseUrl}/collections` }
    ];
    
    if (product.categories && product.categories.length > 0) {
      breadcrumbs.push({
        name: product.categories[0].name,
        url: `${baseUrl}/category/${product.categories[0].slug}`
      });
    }
    
    breadcrumbs.push({ name: product.name, url: productUrl });
    this.setBreadcrumbStructuredData(breadcrumbs);
  }

  /**
   * Generate SEO-friendly title for the product
   * You can customize this method to create titles according to your needs
   */
  private generateProductTitle(product: any): string {
    const brand = product.brand?.name ? `${product.brand.name} ` : '';
    const category = product.categories?.[0]?.name ? ` ${product.categories[0].name}` : '';
    const price = product.sale_price ? `₹${product.sale_price}` : `₹${product.price}`;
    
    // Example: "Nike Air Max 270 Men's Running Shoes - ₹8,999 | Stylexio"
    return `${brand}${product.name}${category} - ${price} | Stylexio`;
  }

  /**
   * Generate SEO-friendly description for the product
   * You can customize this method to create descriptions according to your needs
   */
  private generateProductDescription(product: any): string {
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

    // Common measurement/sizing patterns to drop
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

    // Remove multiple spaces and trailing punctuation leftovers
    sanitized = sanitized.replace(/\s{2,}/g, ' ').replace(/\s([\.,;:!\?])/g, '$1').trim();

    // If description becomes empty after sanitization, fallback to a generic line
    if (!sanitized) {
      sanitized = 'Premium quality, great prices, fast delivery from Stylexio.';
    }

    return sanitized;
  }

  /**
   * Generate SEO keywords for the product
   */
  private generateProductKeywords(product: any): string {
    const keywords = [];
    
    // Add product name
    keywords.push(product.name);
    
    // Add brand
    if (product.brand?.name) {
      keywords.push(product.brand.name);
    }
    
    // Add categories
    if (product.categories) {
      product.categories.forEach((category: any) => {
        keywords.push(category.name);
      });
    }
    
    // Add tags
    if (product.tags) {
      product.tags.forEach((tag: any) => {
        keywords.push(tag.name);
      });
    }
    
    // Add generic keywords
    keywords.push('buy online', 'Stylexio', 'fashion', 'clothing');
    
    return keywords.join(', ');
  }

  /**
   * Calculate average rating from review ratings array
   */
  private calculateAverageRating(ratings: number[]): number {
    if (!ratings || ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return Math.round((sum / ratings.length) * 10) / 10; // Round to 1 decimal place
  }

  /**
   * Set meta tag directly in document (for SSR compatibility)
   */
  private setMetaTagDirectly(name: string, content: string, attribute: string = 'name'): void {
    if (isPlatformServer(this.platformId)) {
      let metaTag = this.document.querySelector(`meta[${attribute}="${name}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = this.document.createElement('meta');
        metaTag.setAttribute(attribute, name);
        metaTag.setAttribute('content', content);
        this.document.head.appendChild(metaTag);
      }
    }
  }

  /**
   * Strip HTML tags from text for clean meta descriptions
   */
  private stripHtmlTags(html: string): string {
    if (!html) return '';
    
    // Create a temporary DOM element to parse HTML
    const temp = document.createElement('div');
    temp.innerHTML = html;
    
    // Get text content and clean it up
    let text = temp.textContent || temp.innerText || '';
    
    // Clean up extra whitespace
    text = text.replace(/\s+/g, ' ').trim();
    
    // Limit to 160 characters for SEO
    if (text.length > 160) {
      text = text.substring(0, 157) + '...';
    }
    
    return text;
  }

  /**
   * Force update SEO data with aggressive overwriting
   * This method ensures product SEO takes precedence over other SEO
   */
  forceUpdateSEOData(data: SEOData): void {
    // Don't clear tags - just update them directly to avoid timing issues
    console.log('🚀 Force update SEO data - NOT clearing tags to prevent timing issues');
    
    // Set new SEO data
    this.setSEOData(data);
    
    // Force update with multiple methods and multiple timeouts
    if (data.title) {
      // Immediate update
      this.title.setTitle(data.title);
      document.title = data.title;
      this.meta.updateTag({ name: 'title', content: data.title });
      this.meta.updateTag({ property: 'og:title', content: data.title });
      this.meta.updateTag({ name: 'twitter:title', content: data.title });
      
      // Delayed updates to ensure they stick
      setTimeout(() => {
        this.title.setTitle(data.title!);
        document.title = data.title!;
        this.meta.updateTag({ name: 'title', content: data.title! });
        this.meta.updateTag({ property: 'og:title', content: data.title! });
        this.meta.updateTag({ name: 'twitter:title', content: data.title! });
      }, 0);
      
      setTimeout(() => {
        this.title.setTitle(data.title!);
        document.title = data.title!;
        this.meta.updateTag({ name: 'title', content: data.title! });
        this.meta.updateTag({ property: 'og:title', content: data.title! });
        this.meta.updateTag({ name: 'twitter:title', content: data.title! });
      }, 100);
    }
    
    if (data.description) {
      const cleanDescription = this.stripHtmlTags(data.description);
      console.log('🚀 Force update - Setting meta description:', cleanDescription);
      
      // Immediate update
      this.meta.updateTag({ name: 'description', content: cleanDescription });
      this.meta.updateTag({ property: 'og:description', content: cleanDescription });
      this.meta.updateTag({ name: 'twitter:description', content: cleanDescription });
      
      // Delayed updates to ensure they stick
      setTimeout(() => {
        this.meta.updateTag({ name: 'description', content: cleanDescription });
        this.meta.updateTag({ property: 'og:description', content: cleanDescription });
        this.meta.updateTag({ name: 'twitter:description', content: cleanDescription });
      }, 0);
      
      setTimeout(() => {
        this.meta.updateTag({ name: 'description', content: cleanDescription });
        this.meta.updateTag({ property: 'og:description', content: cleanDescription });
        this.meta.updateTag({ name: 'twitter:description', content: cleanDescription });
      }, 100);
      
      setTimeout(() => {
        this.meta.updateTag({ name: 'description', content: cleanDescription });
        this.meta.updateTag({ property: 'og:description', content: cleanDescription });
        this.meta.updateTag({ name: 'twitter:description', content: cleanDescription });
      }, 500);
      
      // Final aggressive update with direct DOM manipulation
      setTimeout(() => {
        console.log('🔧 Final force update - Direct DOM manipulation');
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
          metaDesc = document.createElement('meta');
          metaDesc.setAttribute('name', 'description');
          document.head.appendChild(metaDesc);
          console.log('🔧 Created missing meta description tag');
        }
        metaDesc.setAttribute('content', cleanDescription);
        console.log('✅ Meta description final update:', metaDesc.getAttribute('content'));
        
        // Start persistent monitoring to ensure meta description stays
        this.startMetaDescriptionMonitoring(cleanDescription);
      }, 1000);
    }
    
    // Force update URLs
    if (data.url) {
      this.meta.updateTag({ property: 'og:url', content: data.url });
      this.meta.updateTag({ name: 'twitter:url', content: data.url });
      
      setTimeout(() => {
        this.meta.updateTag({ property: 'og:url', content: data.url! });
        this.meta.updateTag({ name: 'twitter:url', content: data.url! });
      }, 100);
    }
  }

  /**
   * Start monitoring to ensure meta description stays in place
   * This prevents other scripts from removing the meta description
   */
  private startMetaDescriptionMonitoring(description: string): void {
    console.log('🛡️ Starting meta description monitoring...');
    
    // Check every 500ms for 10 seconds to ensure meta description stays
    let checkCount = 0;
    const maxChecks = 20; // 10 seconds
    
    const monitor = setInterval(() => {
      checkCount++;
      const metaDesc = document.querySelector('meta[name="description"]');
      
      if (!metaDesc || metaDesc.getAttribute('content') !== description) {
        console.log('⚠️ Meta description missing or changed, restoring...');
        
        // Restore the meta description
        if (!metaDesc) {
          const newMetaDesc = document.createElement('meta');
          newMetaDesc.setAttribute('name', 'description');
          document.head.appendChild(newMetaDesc);
        }
        
        const targetDesc = document.querySelector('meta[name="description"]');
        if (targetDesc) {
          targetDesc.setAttribute('content', description);
          console.log('✅ Meta description restored:', description.substring(0, 50) + '...');
        }
      } else {
        console.log('✅ Meta description is stable');
      }
      
      // Stop monitoring after max checks
      if (checkCount >= maxChecks) {
        clearInterval(monitor);
        console.log('🛡️ Meta description monitoring completed');
      }
    }, 500);
  }
}
