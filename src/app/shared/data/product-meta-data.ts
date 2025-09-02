export interface ProductMetaData {
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  canonical_url: string;
}

export const PRODUCT_META_DATA: { [key: number]: ProductMetaData } = {
  1678: {
    meta_title: "Blue Formal Shirt for Men | Premium Cotton | Stylexio",
    meta_description: "Shop a premium blue formal shirt for men at Stylexio. Soft cotton, tailored fit, work-ready design. Available in all sizes. Easy returns. Order today.",
    meta_keywords: "Blue Formal Shirt, men's shirt, cotton shirt, formal wear, Stylexio",
    canonical_url: "https://stylexio.in/product/blue-formal-shirt-for-men-premium-cotton-stylexio"
  },
  // Add more products here as needed
  // 1679: {
  //   meta_title: "Another Product Title | Stylexio",
  //   meta_description: "Another product description...",
  //   meta_keywords: "keywords, here",
  //   canonical_url: "https://stylexio.in/product/another-product"
  // }
};
