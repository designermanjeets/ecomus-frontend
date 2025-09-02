# Product SEO Customization Guide

This guide explains how to set custom meta titles and descriptions for individual product pages in your Stylexio e-commerce application.

## 🎯 Overview

Your application now supports dynamic SEO meta tags for each product page. The system works in two ways:

1. **Custom Meta Data**: If you set `meta_title` and `meta_description` in your product data, it will use those
2. **Auto-Generated**: If no custom meta data is provided, it automatically generates SEO-friendly titles and descriptions

## 🔧 How It Works

### 1. Product Interface Fields

Your `Product` interface already includes these SEO fields:

```typescript
export interface Product {
  // ... other fields
  meta_title: string;           // Custom meta title
  meta_description: string;     // Custom meta description  
  meta_keywords?: string;       // Custom meta keywords
  canonical_url?: string;       // Custom canonical URL
  // ... other fields
}
```

### 2. Automatic SEO Generation

If you don't provide custom meta data, the system automatically generates:

**Title Format**: `{Brand} {Product Name} {Category} - ₹{Price} | Stylexio`

**Example**: `Nike Air Max 270 Men's Running Shoes - ₹8,999 | Stylexio`

**Description**: Uses product description or generates one with brand, category, price, and discount info (limited to 160 characters)

## 📝 Setting Custom Meta Data

### Method 1: Database/API Level

Set the meta fields directly in your product data:

```json
{
  "id": 123,
  "name": "Nike Air Max 270",
  "meta_title": "Buy Nike Air Max 270 Running Shoes Online - Stylexio",
  "meta_description": "Shop Nike Air Max 270 running shoes at Stylexio. Premium comfort, latest design, free shipping. Best prices guaranteed!",
  "meta_keywords": "Nike Air Max 270, running shoes, Nike, athletic footwear, Stylexio",
  "canonical_url": "https://stylexio.in/product/nike-air-max-270",
  // ... other product data
}
```

### Method 2: Customize Generation Logic

You can modify the generation methods in `SeoService` to create different title/description formats:

```typescript
// In src/app/shared/services/seo.service.ts

private generateProductTitle(product: any): string {
  // Customize this method for your preferred title format
  
  // Example 1: Simple format
  return `${product.name} - Buy Online | Stylexio`;
  
  // Example 2: With price
  const price = product.sale_price || product.price;
  return `${product.name} - ₹${price} | Stylexio`;
  
  // Example 3: With brand and category
  const brand = product.brand?.name ? `${product.brand.name} ` : '';
  const category = product.categories?.[0]?.name ? ` ${product.categories[0].name}` : '';
  return `${brand}${product.name}${category} | Stylexio`;
}

private generateProductDescription(product: any): string {
  // Customize this method for your preferred description format
  
  // Example 1: Simple format
  return `Shop ${product.name} online at Stylexio. Premium quality, fast delivery, best prices.`;
  
  // Example 2: With features
  const features = product.features ? product.features.join(', ') : '';
  return `Buy ${product.name} at Stylexio. Features: ${features}. Free shipping, easy returns.`;
  
  // Example 3: With discount
  const discount = product.discount > 0 ? ` Save ${product.discount}%!` : '';
  return `Shop ${product.name} online at Stylexio.${discount} Premium quality, fast delivery.`;
}
```

## 🎨 Customization Examples

### Example 1: Fashion Products

```typescript
// For fashion products, you might want:
private generateProductTitle(product: any): string {
  const brand = product.brand?.name || '';
  const category = product.categories?.[0]?.name || '';
  const color = product.color || '';
  
  return `${brand} ${product.name} ${color} ${category} - Stylexio Fashion`;
}

private generateProductDescription(product: any): string {
  const brand = product.brand?.name || '';
  const category = product.categories?.[0]?.name || '';
  const material = product.material || '';
  
  return `Shop ${brand} ${product.name} ${category} at Stylexio. Made with ${material}. 
          Latest fashion trends, premium quality, free shipping across India.`;
}
```

### Example 2: Electronics

```typescript
// For electronics, you might want:
private generateProductTitle(product: any): string {
  const brand = product.brand?.name || '';
  const model = product.model || '';
  const specs = product.key_specs || '';
  
  return `${brand} ${product.name} ${model} - ${specs} | Stylexio Electronics`;
}

private generateProductDescription(product: any): string {
  const warranty = product.warranty || '1 year';
  const features = product.key_features?.join(', ') || '';
  
  return `Buy ${product.name} at Stylexio. Features: ${features}. 
          ${warranty} warranty, genuine products, fast delivery.`;
}
```

### Example 3: Category-Specific SEO

```typescript
// You can also customize based on product category:
private generateProductTitle(product: any): string {
  const category = product.categories?.[0]?.name?.toLowerCase() || '';
  
  switch(category) {
    case 'shoes':
      return `${product.name} Shoes - Buy Online | Stylexio Footwear`;
    case 'clothing':
      return `${product.name} - Fashion Clothing | Stylexio`;
    case 'accessories':
      return `${product.name} Accessories - Stylexio`;
    default:
      return `${product.name} - Buy Online | Stylexio`;
  }
}
```

## 🔍 Testing Your SEO

### 1. View Page Source

Check the generated meta tags in your browser:

```html
<title>Nike Air Max 270 Men's Running Shoes - ₹8,999 | Stylexio</title>
<meta name="description" content="Shop Nike Air Max 270 running shoes at Stylexio...">
<meta name="keywords" content="Nike Air Max 270, running shoes, Nike, athletic footwear">
<link rel="canonical" href="https://stylexio.in/product/nike-air-max-270">
```

### 2. Use SEO Tools

- **Google Search Console**: Monitor how your pages appear in search results
- **Facebook Debugger**: Test how your product pages look when shared on social media
- **Twitter Card Validator**: Check Twitter card previews
- **Google Rich Results Test**: Verify structured data

### 3. Browser Developer Tools

```javascript
// Check meta tags in console
console.log(document.title);
console.log(document.querySelector('meta[name="description"]').content);
console.log(document.querySelector('link[rel="canonical"]').href);
```

## 🚀 Advanced Customization

### 1. Dynamic Meta Data Based on User Location

```typescript
private generateProductTitle(product: any): string {
  const userLocation = this.getUserLocation(); // Your location detection logic
  const currency = userLocation === 'IN' ? '₹' : '$';
  const price = userLocation === 'IN' ? product.price : product.price_usd;
  
  return `${product.name} - ${currency}${price} | Stylexio`;
}
```

### 2. A/B Testing Different Title Formats

```typescript
private generateProductTitle(product: any): string {
  const testGroup = this.getABTestGroup(); // Your A/B testing logic
  
  if (testGroup === 'A') {
    return `${product.name} - Buy Online | Stylexio`;
  } else {
    return `${product.name} - Best Price Guaranteed | Stylexio`;
  }
}
```

### 3. Seasonal/Event-Based SEO

```typescript
private generateProductTitle(product: any): string {
  const season = this.getCurrentSeason();
  const event = this.getCurrentEvent();
  
  let title = `${product.name} | Stylexio`;
  
  if (season === 'winter' && product.category === 'clothing') {
    title = `${product.name} - Winter Collection | Stylexio`;
  }
  
  if (event === 'diwali' && product.discount > 20) {
    title = `${product.name} - Diwali Sale ${product.discount}% Off | Stylexio`;
  }
  
  return title;
}
```

## 📊 SEO Best Practices

### 1. Title Tag Guidelines
- Keep under 60 characters
- Include primary keyword
- Make it compelling and click-worthy
- Include brand name

### 2. Meta Description Guidelines
- Keep under 160 characters
- Include call-to-action
- Mention key benefits
- Include price or discount if relevant

### 3. Keywords Guidelines
- Use 5-10 relevant keywords
- Include product name, brand, category
- Add location-based keywords if relevant
- Avoid keyword stuffing

## 🔧 Troubleshooting

### Common Issues:

1. **Meta tags not updating**: Clear browser cache and check if the product data is loading correctly
2. **Duplicate content**: Ensure each product has a unique canonical URL
3. **Missing structured data**: Check browser console for JSON-LD errors
4. **Social media previews not working**: Use Facebook/Twitter debuggers to refresh cache

### Debug Mode:

Add this to your component to debug SEO data:

```typescript
private setProductSEO(product: Product): void {
  const productSlug = this.route.snapshot.paramMap.get('slug');
  
  // Debug logging
  console.log('Setting SEO for product:', product.name);
  console.log('Custom meta title:', product.meta_title);
  console.log('Custom meta description:', product.meta_description);
  
  this.seoService.setProductPageSEO(product, productSlug);
}
```

## 📈 Monitoring and Analytics

Track your SEO performance:

1. **Google Search Console**: Monitor impressions, clicks, and rankings
2. **Google Analytics**: Track organic traffic to product pages
3. **Social Media Analytics**: Monitor shares and engagement
4. **Conversion Tracking**: Measure how SEO improvements affect sales

---

## 🎯 Quick Start Checklist

- [ ] Product interface has `meta_title` and `meta_description` fields
- [ ] SeoService is imported in ProductComponent
- [ ] `setProductSEO()` is called when product loads
- [ ] Test with a product that has custom meta data
- [ ] Test with a product that uses auto-generated meta data
- [ ] Verify meta tags in page source
- [ ] Test social media sharing
- [ ] Check structured data with Google's Rich Results Test

Your product pages now have dynamic, SEO-optimized meta tags that will help improve search engine rankings and social media sharing! 🚀
