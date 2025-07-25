import { Component, Input, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-seo-heading',
  template: `
    <div class="seo-heading-container">
      <h1 *ngIf="level === 1" [class]="headingClass">{{ title }}</h1>
      <h2 *ngIf="level === 2" [class]="headingClass">{{ title }}</h2>
      <h3 *ngIf="level === 3" [class]="headingClass">{{ title }}</h3>
      <h4 *ngIf="level === 4" [class]="headingClass">{{ title }}</h4>
      <h5 *ngIf="level === 5" [class]="headingClass">{{ title }}</h5>
      <h6 *ngIf="level === 6" [class]="headingClass">{{ title }}</h6>
      
      <div *ngIf="description" class="seo-description">
        <p>{{ description }}</p>
      </div>
    </div>
  `,
  styles: [`
    .seo-heading-container {
      margin-bottom: 1.5rem;
    }
    
    .seo-heading-container h1,
    .seo-heading-container h2,
    .seo-heading-container h3,
    .seo-heading-container h4,
    .seo-heading-container h5,
    .seo-heading-container h6 {
      margin-bottom: 0.5rem;
      color: #333;
      font-weight: 600;
    }
    
    .seo-heading-container h1 {
      font-size: 2.5rem;
      line-height: 1.2;
    }
    
    .seo-heading-container h2 {
      font-size: 2rem;
      line-height: 1.3;
    }
    
    .seo-heading-container h3 {
      font-size: 1.75rem;
      line-height: 1.4;
    }
    
    .seo-heading-container h4 {
      font-size: 1.5rem;
      line-height: 1.4;
    }
    
    .seo-heading-container h5 {
      font-size: 1.25rem;
      line-height: 1.4;
    }
    
    .seo-heading-container h6 {
      font-size: 1rem;
      line-height: 1.4;
    }
    
    .seo-description {
      margin-top: 0.5rem;
    }
    
    .seo-description p {
      color: #666;
      font-size: 1rem;
      line-height: 1.6;
      margin: 0;
    }
  `]
})
export class SeoHeadingComponent implements OnInit {
  @Input() title: string = '';
  @Input() description?: string;
  @Input() level: 1 | 2 | 3 | 4 | 5 | 6 = 2;
  @Input() headingClass: string = '';
  @Input() seoData?: any;

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    if (this.seoData) {
      this.seoService.setSEOData(this.seoData);
    }
  }
} 