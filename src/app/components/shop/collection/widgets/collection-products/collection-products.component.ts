import { Component, Input, OnChanges } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, map } from 'rxjs';
import { ProductService } from '../../../../../shared/services/product.service';
import { ProductModel, Product } from '../../../../../shared/interface/product.interface';
import { ProductState } from '../../../../../shared/state/product.state';
import { Params } from '../../../../../shared/interface/core.interface';
import { ThemeOptionState } from '../../../../../shared/state/theme-option.state';
import { Option } from '../../../../../shared/interface/theme-option.interface';

@Component({
  selector: 'app-collection-products',
  templateUrl: './collection-products.component.html',
  styleUrls: ['./collection-products.component.scss']
})
export class CollectionProductsComponent implements OnChanges {

  @Select(ProductState.product) product$: Observable<ProductModel>;
  @Select(ThemeOptionState.themeOptions) themeOption$: Observable<Option>;

  @Input() filter: Params;
  @Input() gridCol: string;

  public gridClass: string = "row g-sm-4 g-3 row-cols-xl-4 row-cols-md-3 row-cols-2 product-list-section";
  public filteredProducts$: Observable<Product[]>;

  public skeletonItems = Array.from({ length: 40 }, (_, index) => index);

  constructor(public productService: ProductService) {
  }

  ngOnChanges() {
    this.applySizeFiltering();
  }

  private applySizeFiltering() {
    this.filteredProducts$ = this.product$.pipe(
      map(productModel => {
        if (!productModel?.data) return [];

        let filteredProducts = productModel.data;

        // Apply size filtering if size parameter is present
        if (this.filter && this.filter['size']) {
          const selectedSizes = (this.filter['size'] as string).split(',').map((size: string) => size.trim().toUpperCase());

          filteredProducts = filteredProducts.filter(product => {
            return this.productHasSelectedSize(product, selectedSizes);
          });
        }

        return filteredProducts;
      })
    );
  }

  private productHasSelectedSize(product: Product, selectedSizes: string[]): boolean {
    // Check if product has variations with selected sizes
    if (product.variations && product.variations.length > 0) {
      for (const variation of product.variations) {
        if (variation.variation_options) {
          for (const option of variation.variation_options) {
            // Check if option name contains size-related keywords and matches selected sizes
            if (this.isSizeOption(option) && option.value && selectedSizes.includes(option.value.toUpperCase())) {
              return true;
            }
            // Also check if the value itself is a size regardless of option name
            if (option.value && this.isSizeValue(option.value) && selectedSizes.includes(option.value.toUpperCase())) {
              return true;
            }
          }
        }

        // Check attribute values in variation
        if (variation.attribute_values) {
          for (const attrValue of variation.attribute_values) {
            if (attrValue.value && selectedSizes.includes(attrValue.value.toUpperCase())) {
              return true;
            }
          }
        }
      }
    }

    // Check product attributes for size
    if (product.attributes && product.attributes.length > 0) {
      for (const attribute of product.attributes) {
        // Check attributes with "size" in name
        if (attribute.name && attribute.name.toLowerCase().includes('size')) {
          if (attribute.attribute_values) {
            for (const attrValue of attribute.attribute_values) {
              if (attrValue.value && selectedSizes.includes(attrValue.value.toUpperCase())) {
                return true;
              }
            }
          }
        }
        // Check all attributes for size values
        if (attribute.attribute_values) {
          for (const attrValue of attribute.attribute_values) {
            if (attrValue.value && selectedSizes.includes(attrValue.value.toUpperCase())) {
              return true;
            }
          }
        }
      }
    }

    // Check product attribute_values array
    if (product.attribute_values && product.attribute_values.length > 0) {
      for (const attrValue of product.attribute_values) {
        if (typeof attrValue === 'object' && attrValue && 'value' in attrValue) {
          const value = (attrValue as any).value;
          if (value && typeof value === 'string' && selectedSizes.includes(value.toUpperCase())) {
            return true;
          }
        } else if (typeof attrValue === 'string') {
          if (selectedSizes.includes((attrValue as string).toUpperCase())) {
            return true;
          }
        }
      }
    }

    // Last resort: check all string fields in the product for size values
    const productString = JSON.stringify(product).toUpperCase();
    if (selectedSizes.some(size => productString.includes(size))) {
      return true;
    }

    return false;
  }

  private isSizeOption(option: any): boolean {
    // Check if the variation option is related to size
    const optionName = option.name ? option.name.toLowerCase() : '';
    return optionName.includes('size') || optionName.includes('sizing') ||
           optionName.includes('sizes') || optionName.includes('dimension') ||
           ['s', 'm', 'l', 'xl', 'xxl', 'xs', 'xxxl', 'small', 'medium', 'large', 'extra large', 'extra small'].includes(optionName);
  }

  private isSizeValue(value: string): boolean {
    if (!value) return false;
    const upperValue = value.toUpperCase().trim();
    return ['S', 'M', 'L', 'XL', 'XXL', 'XS', 'XXXL', 'SMALL', 'MEDIUM', 'LARGE', 'EXTRA LARGE', 'EXTRA SMALL'].includes(upperValue) ||
           upperValue.match(/^\d+\s*(CM|INCH|INCHES|MM|EU|US|UK)$/i) !== null; // Size measurements
  }

  setGridClass(gridClass: string) {
    this.gridClass = gridClass;
  }
}
