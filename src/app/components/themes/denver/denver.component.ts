import { Component, Input, ViewChild, ElementRef, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Select, Store  } from '@ngxs/store';
import { Observable, forkJoin } from 'rxjs';
import { GetProductByIds } from '../../../shared/action/product.action';
import { Denver } from '../../../shared/interface/theme.interface';
import { ThemeOptionService } from '../../../shared/services/theme-option.service';
import * as data from  '../../../shared/data/owl-carousel';
import { GetBrands } from '../../../shared/action/brand.action';
import { GetStores } from '../../../shared/action/store.action';
import { ThemeOptionState } from '../../../shared/state/theme-option.state';
import { Option } from '../../../shared/interface/theme-option.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-denver',
  templateUrl: './denver.component.html',
  styleUrls: ['./denver.component.scss']
})
export class DenverComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() data?: Denver;
  @Input() slug?: string;
  @ViewChild('heroSlider') heroSlider!: ElementRef;
  @ViewChild('sliderTrack') sliderTrack!: ElementRef;

  @Select(ThemeOptionState.themeOptions) themeOption$: Observable<Option>;

  public categorySlider = data.categorySlider9;
  public productSlider6ItemMargin = data.productSlider6ItemMargin;
  
  // Hero Slider Properties
  public currentSlide = 0;
  public autoSlideInterval: any;
  public isDragging = false;
  public startX = 0;
  public currentX = 0;
  public translateX = 0;
  
  public heroSlides = [
    {
      image: 'assets/images/stylexio-banner-1.jpg',
      alt: 'Stylexio Winter Fashion - Warm Looks Cool Vibes',
      link: '/collections'
    },
    {
      image: 'assets/images/stylexio-banner-2.jpg',
      alt: 'Stylexio Seasonal Trends - Meet The Trends Of Season',
      link: '/collections'
    }
  ];

  constructor(private store: Store,
    private route: ActivatedRoute,
    private themeOptionService: ThemeOptionService) {}

  ngAfterViewInit() {
    this.initSlider();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  // Slider Methods
  initSlider() {
    if (this.sliderTrack) {
      this.sliderTrack.nativeElement.addEventListener('mousedown', this.onDragStart.bind(this));
      this.sliderTrack.nativeElement.addEventListener('touchstart', this.onDragStart.bind(this));
      document.addEventListener('mousemove', this.onDragMove.bind(this));
      document.addEventListener('touchmove', this.onDragMove.bind(this));
      document.addEventListener('mouseup', this.onDragEnd.bind(this));
      document.addEventListener('touchend', this.onDragEnd.bind(this));
    }
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      if (!this.isDragging) {
        this.nextSlide();
      }
    }, 5000); // Auto slide every 5 seconds
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
    this.updateSliderPosition();
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.heroSlides.length - 1 : this.currentSlide - 1;
    this.updateSliderPosition();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateSliderPosition();
  }

  updateSliderPosition() {
    if (this.sliderTrack) {
      const slideWidth = this.sliderTrack.nativeElement.offsetWidth;
      this.translateX = -this.currentSlide * slideWidth;
      this.sliderTrack.nativeElement.style.transform = `translateX(${this.translateX}px)`;
    }
  }

  // Drag functionality
  onDragStart(e: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.stopAutoSlide();
    
    if (e instanceof MouseEvent) {
      this.startX = e.clientX;
    } else {
      this.startX = e.touches[0].clientX;
    }
    
    this.sliderTrack.nativeElement.style.transition = 'none';
  }

  onDragMove(e: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    
    e.preventDefault();
    
    if (e instanceof MouseEvent) {
      this.currentX = e.clientX;
    } else {
      this.currentX = e.touches[0].clientX;
    }
    
    const diffX = this.currentX - this.startX;
    const slideWidth = this.sliderTrack.nativeElement.offsetWidth;
    const newTranslateX = this.translateX + diffX;
    
    // Limit dragging range
    const maxTranslate = 0;
    const minTranslate = -(this.heroSlides.length - 1) * slideWidth;
    
    if (newTranslateX <= maxTranslate && newTranslateX >= minTranslate) {
      this.sliderTrack.nativeElement.style.transform = `translateX(${newTranslateX}px)`;
    }
  }

  onDragEnd(e: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    
    this.isDragging = false;
    this.sliderTrack.nativeElement.style.transition = 'transform 0.3s ease';
    
    const diffX = this.currentX - this.startX;
    const slideWidth = this.sliderTrack.nativeElement.offsetWidth;
    const threshold = slideWidth * 0.3; // 30% threshold for slide change
    
    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        this.previousSlide();
      } else {
        this.nextSlide();
      }
    } else {
      this.updateSliderPosition();
    }
    
    this.startAutoSlide();
  }

  ngOnInit() {
    if(this.data?.slug == this.slug) {
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        paginate: this.data?.content?.products_ids.length,
        ids: this.data?.content?.products_ids?.join(',')
      }));
      const getBrand$ = this.store.dispatch(new GetBrands({ 
        status: 1,
        ids: this.data?.content?.brands?.brand_ids?.join()
      }));
      const getStore$ = this.store.dispatch(new GetStores({ 
        status: 1,
        ids: this.data?.content?.seller?.store_ids?.join()
      }));

      // Skeleton Loader
      document.body.classList.add('skeleton-body');

      forkJoin([getProducts$, getBrand$, getStore$]).subscribe({
        complete: () => {
          document.body.classList.remove('skeleton-body');
          this.themeOptionService.preloader = false;
        }
      });
    }

    this.route.queryParams.subscribe(params => {
      if(this.route.snapshot.data['data'].theme_option.productBox === 'digital'){
        if (this.productSlider6ItemMargin && this.productSlider6ItemMargin.responsive && this.productSlider6ItemMargin.responsive['1180']) {
          this.productSlider6ItemMargin = {...this.productSlider6ItemMargin, items: 4, responsive :{
            ...this.productSlider6ItemMargin.responsive,
            1180: {
              items: 4
            }
          }}
        }
      } else {
        if (this.productSlider6ItemMargin && this.productSlider6ItemMargin.responsive && this.productSlider6ItemMargin.responsive['1180']) {
          this.productSlider6ItemMargin = {...this.productSlider6ItemMargin, items: 6, responsive :{
            ...this.productSlider6ItemMargin.responsive,
            1180: {
              items: 6
            }
          }}
        }
      }
    })
  }

}
