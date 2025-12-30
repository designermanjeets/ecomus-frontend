import { Component, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Params } from '../../../../../../shared/interface/core.interface';

@Component({
  selector: 'app-collection-price-range-filter',
  templateUrl: './collection-price-range-filter.component.html',
  styleUrls: ['./collection-price-range-filter.component.scss']
})
export class CollectionPriceRangeFilterComponent implements OnChanges, OnDestroy {

  @Input() filter: Params;

  public minPrice: number = 0;
  public maxPrice: number = 15000;
  public selectedMinPrice: number = 0;
  public selectedMaxPrice: number = 15000;
  private scrollPosition: number = 0;
  private navigationSubscription?: Subscription;
  private scrollSubscription?: Subscription;
  private shouldRestoreScroll: boolean = false;
  private restoreTimeout?: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    // Initialize with default range
    this.selectedMinPrice = this.minPrice;
    this.selectedMaxPrice = this.maxPrice;

    // Restore scroll position after navigation completes
    this.navigationSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.shouldRestoreScroll && this.scrollPosition > 0) {
          this.restoreScrollPosition();
        }
      });

    // Also listen to Scroll events (triggered by guards) and restore after them
    this.scrollSubscription = this.router.events
      .pipe(filter((e): e is Scroll => e instanceof Scroll))
      .subscribe(() => {
        if (this.shouldRestoreScroll && this.scrollPosition > 0) {
          // Clear any existing timeout
          if (this.restoreTimeout) {
            clearTimeout(this.restoreTimeout);
          }
          // Restore after guard has set scroll position
          this.restoreTimeout = setTimeout(() => {
            this.restoreScrollPosition();
          }, 10);
        }
      });
  }

  private restoreScrollPosition() {
    if (!this.shouldRestoreScroll || this.scrollPosition <= 0) {
      return;
    }

    const restoreScroll = () => {
      window.scrollTo(0, this.scrollPosition);
      this.viewportScroller.scrollToPosition([0, this.scrollPosition]);
    };

    // Try immediately
    restoreScroll();

    // Try after multiple delays to ensure it works even if guards scroll
    setTimeout(restoreScroll, 0);
    setTimeout(restoreScroll, 50);
    setTimeout(restoreScroll, 100);
    setTimeout(restoreScroll, 200);
    
    // Use requestAnimationFrame for next frames
    requestAnimationFrame(() => {
      restoreScroll();
      requestAnimationFrame(() => {
        restoreScroll();
      });
    });

    // Reset flag after restoration attempts
    setTimeout(() => {
      this.shouldRestoreScroll = false;
    }, 300);
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
    if (this.restoreTimeout) {
      clearTimeout(this.restoreTimeout);
    }
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
    // Save current scroll position before navigation
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.shouldRestoreScroll = true;

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

