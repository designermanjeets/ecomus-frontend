import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '../../../../../../shared/interface/core.interface';

@Component({
  selector: 'app-collection-price-range-filter',
  templateUrl: './collection-price-range-filter.component.html',
  styleUrls: ['./collection-price-range-filter.component.scss']
})
export class CollectionPriceRangeFilterComponent implements OnChanges {

  @Input() filter: Params;

  public minPrice: number = 0;
  public maxPrice: number = 5000;
  public selectedMinPrice: number = 0;
  public selectedMaxPrice: number = 5000;

  constructor(private route: ActivatedRoute, private router: Router) {
    // Initialize with default range
    this.selectedMinPrice = this.minPrice;
    this.selectedMaxPrice = this.maxPrice;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.filter && this.filter['price']) {
      // Parse price from query params (format: "min-max" or "min-max,min-max")
      const priceParam = this.filter['price'];
      if (priceParam) {
        // If multiple ranges, take the first one
        const priceRanges = priceParam.split(',');
        const firstRange = priceRanges[0];
        
        if (firstRange.includes('-')) {
          const [min, max] = firstRange.split('-').map(Number);
          if (!isNaN(min) && !isNaN(max)) {
            this.selectedMinPrice = min;
            this.selectedMaxPrice = max;
          }
        } else {
          // Single value (like "1000" for above)
          const value = Number(firstRange);
          if (!isNaN(value)) {
            this.selectedMinPrice = value;
            this.selectedMaxPrice = this.maxPrice;
          }
        }
      } else {
        // Reset to default if no price filter
        this.selectedMinPrice = this.minPrice;
        this.selectedMaxPrice = this.maxPrice;
      }
    }
  }

  onMinPriceChange(value: number) {
    const clampedValue = Math.max(this.minPrice, Math.min(value || this.minPrice, this.selectedMaxPrice));
    this.selectedMinPrice = clampedValue;
  }

  onMaxPriceChange(value: number) {
    const clampedValue = Math.min(this.maxPrice, Math.max(value || this.maxPrice, this.selectedMinPrice));
    this.selectedMaxPrice = clampedValue;
  }

  onRangeChange(event: Event, type: 'min' | 'max') {
    const value = Number((event.target as HTMLInputElement).value);
    
    if (type === 'min') {
      // Ensure min doesn't exceed max
      if (value <= this.selectedMaxPrice) {
        this.selectedMinPrice = Math.max(this.minPrice, value);
      } else {
        this.selectedMinPrice = this.selectedMaxPrice;
      }
    } else {
      // Ensure max doesn't go below min
      if (value >= this.selectedMinPrice) {
        this.selectedMaxPrice = Math.min(this.maxPrice, value);
      } else {
        this.selectedMaxPrice = this.selectedMinPrice;
      }
    }
    // Don't apply filter on every change, only on mouseup/touchend
    // This will be handled by the input blur events
  }

  applyFilter() {
    // Only apply if values are different from default range
    const priceValue = 
      (this.selectedMinPrice > this.minPrice || this.selectedMaxPrice < this.maxPrice)
        ? `${this.selectedMinPrice}-${this.selectedMaxPrice}`
        : null;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        price: priceValue,
        page: 1
      },
      queryParamsHandling: 'merge',
      skipLocationChange: false
    });
  }

  resetFilter() {
    this.selectedMinPrice = this.minPrice;
    this.selectedMaxPrice = this.maxPrice;
    this.applyFilter();
  }

  getPercentage(value: number): number {
    return ((value - this.minPrice) / (this.maxPrice - this.minPrice)) * 100;
  }
}

