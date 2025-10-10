import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-seo-example',
  template: `
    <div class="seo-example-container">
      <!-- Main page title with H1 -->
      <app-seo-heading 
        title="Stylexio Premium Mens and Womens Fashion Online" 
        description="Discover new season shirts jackets suits denim and more at Stylexio. Premium quality fast shipping across India COD and easy returns."
        level="1"
        headingClass="main-title">
      </app-seo-heading>

      <!-- Featured Products section with H2 -->
      <app-seo-heading 
        title="Featured Products" 
        description="Explore our handpicked selection of trending products"
        level="2"
        headingClass="section-title">
      </app-seo-heading>

      <div class="products-grid">
        <div class="product-card" *ngFor="let product of featuredProducts">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <span class="price">{{ product.price }}</span>
        </div>
      </div>

      <!-- Categories section with H2 -->
      <app-seo-heading 
        title="Shop by Category" 
        level="2"
        headingClass="section-title">
      </app-seo-heading>

      <div class="categories-grid">
        <div class="category-card" *ngFor="let category of categories">
          <h3>{{ category.name }}</h3>
          <p>{{ category.description }}</p>
        </div>
      </div>

      <!-- About section with H2 -->
      <app-seo-heading 
        title="About Ecomus" 
        level="2"
        headingClass="section-title">
      </app-seo-heading>

      <div class="about-content">
        <h3>Our Mission</h3>
        <p>To provide the best online shopping experience with quality products and excellent customer service.</p>
        
        <h3>Why Choose Us</h3>
        <ul>
          <li>Wide selection of products</li>
          <li>Competitive prices</li>
          <li>Fast and reliable shipping</li>
          <li>Excellent customer support</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .seo-example-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .main-title {
      color: #2c3e50;
      text-align: center;
      margin-bottom: 2rem;
    }

    .section-title {
      color: #34495e;
      margin: 2rem 0 1rem 0;
      border-bottom: 2px solid #3498db;
      padding-bottom: 0.5rem;
    }

    .products-grid, .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin: 1.5rem 0;
    }

    .product-card, .category-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1rem;
      background: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .product-card h3, .category-card h3 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }

    .price {
      font-weight: bold;
      color: #e74c3c;
      font-size: 1.1rem;
    }

    .about-content {
      background: #f8f9fa;
      padding: 1.5rem;
      border-radius: 8px;
      margin: 1.5rem 0;
    }

    .about-content h3 {
      color: #2c3e50;
      margin: 1rem 0 0.5rem 0;
    }

    .about-content ul {
      margin: 0.5rem 0;
      padding-left: 1.5rem;
    }

    .about-content li {
      margin: 0.25rem 0;
      color: #555;
    }
  `]
})
export class SeoExampleComponent implements OnInit {
  featuredProducts = [
    {
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation',
      price: '$99.99'
    },
    {
      name: 'Smart Watch',
      description: 'Feature-rich smartwatch with health monitoring',
      price: '$199.99'
    },
    {
      name: 'Laptop Stand',
      description: 'Ergonomic laptop stand for better posture',
      price: '$49.99'
    }
  ];

  categories = [
    {
      name: 'Electronics',
      description: 'Latest gadgets and electronic devices'
    },
    {
      name: 'Fashion',
      description: 'Trendy clothing and accessories'
    },
    {
      name: 'Home & Garden',
      description: 'Everything for your home and garden'
    },
    {
      name: 'Sports & Outdoors',
      description: 'Equipment for sports and outdoor activities'
    }
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    // Set comprehensive SEO data for this page
    this.seoService.setSEOData({
      title: 'Stylexio Premium Mens and Womens Fashion Online',
      description: 'Discover new season shirts jackets suits denim and more at Stylexio. Premium quality fast shipping across India COD and easy returns.',
      keywords: 'activewear, gym wear, joggers, men\'s clothes, women\'s clothes, stylish outfits, comfort fit, performance clothing, Stylexio',
      image: 'https://stylexio.in/assets/images/hero-banner.jpg',
      url: 'https://stylexio.in',
      type: 'website',
      author: 'Ecomus Team'
    });

    // Set organization structured data
    this.seoService.setOrganizationStructuredData();

    // Set breadcrumb structured data
    this.seoService.setBreadcrumbStructuredData([
      { name: 'Home', url: 'https://stylexio.in' },
      { name: 'Featured Products', url: 'https://stylexio.in/featured' }
    ]);
  }
} 