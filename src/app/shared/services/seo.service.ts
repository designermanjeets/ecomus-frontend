import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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
    private title: Title
  ) { }

  /**
   * Set comprehensive SEO data including meta tags and structured data
   */
  setSEOData(data: SEOData): void {
    // Set title
    if (data.title) {
      this.title.setTitle(data.title);
    }

    // Set meta tags
    if (data.description) {
      this.meta.updateTag({ name: 'description', content: data.description });
      this.meta.updateTag({ property: 'og:description', content: data.description });
      this.meta.updateTag({ name: 'twitter:description', content: data.description });
    }

    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
      this.meta.updateTag({ name: 'twitter:image', content: data.image });
    }

    if (data.url) {
      this.meta.updateTag({ property: 'og:url', content: data.url });
      this.meta.updateTag({ name: 'twitter:url', content: data.url });
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
   */
  setCanonicalUrl(url: string): void {
    // Remove existing canonical tags
    this.meta.removeTag('rel="canonical"');
    
    // Add new canonical tag
    this.meta.addTag({ rel: 'canonical', href: url });
    
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
    const structuredData: any = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": product.name,
      "description": product.description,
      "image": product.image,
      "brand": {
        "@type": "Brand",
        "name": product.brand || "Ecomus"
      },
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": product.currency || "USD",
        "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        "url": product.url
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
   * Update default SEO settings
   */
  updateDefaultSeo(): void {
    this.setSEOData({
      title: 'Menswear Online Shopping Made Easy – Shop the Latest Trends | ',
      description: 'Menswear online shopping made simple. Explore the latest fashion, best deals, and must-have wardrobe essentials for every style and budget at STYLEXIO',
      keywords: 'online shopping, ecommerce, electronics, fashion, home & garden, deals, discounts',
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
}
