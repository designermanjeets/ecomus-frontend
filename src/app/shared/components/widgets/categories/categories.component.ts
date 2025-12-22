import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Category, CategoryModel } from '../../../interface/category.interface';
import { CategoryState } from '../../../state/category.state';
import { AttributeService } from '../../../services/attribute.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  @Select(CategoryState.category) category$: Observable<CategoryModel>;

  @Input() categoryIds: number[] = [];
  @Input() style: string = 'vertical';
  @Input() title?: string;
  @Input() image?: string;
  @Input() theme: string;
  @Input() sliderOption: OwlOptions;
  @Input() selectedCategoryId: number;
  @Input() bgImage: string;
  
  @Output() selectedCategory: EventEmitter<number> = new EventEmitter();

  public categories: Category[];
  public selectedCategorySlug: string[] = [];

  constructor(private route: ActivatedRoute,
    public attributeService: AttributeService,
    private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.selectedCategorySlug = params['category'] ? params['category'].split(',') : [];
    });
    
    this.category$.subscribe(res => this.categories = res.data.map(category => category ));

  }

  ngOnChanges() {
    if(this.categoryIds && this.categoryIds.length) {
      this.category$.subscribe(res => this.categories = res.data.filter(category => this.categoryIds?.includes(category.id)));
    }
  }

  selectCategory(id?: number) {
    this.selectedCategory.emit(id);
  }

  redirectToCollection(slug: string) {
    const urlFriendlySlug = this.getUrlFriendlySlug(slug);
    let index = this.selectedCategorySlug.indexOf(urlFriendlySlug);
    if(index === -1)
      this.selectedCategorySlug.push(urlFriendlySlug);
    else
      this.selectedCategorySlug.splice(index,1);

    this.router.navigate(['/collections'], {
      relativeTo: this.route,
      queryParams: {
        category: this.selectedCategorySlug.length ? this.selectedCategorySlug?.join(',') : null
      },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    });
  }

  closeCanvasMenu() {
    this.attributeService.offCanvasMenu = false;
  }

  /**
   * Converts a category slug to URL-friendly format
   * Converts spaces to hyphens and makes it lowercase
   * Example: "Winter collections" -> "winter-collections"
   */
  getUrlFriendlySlug(slug: string | undefined): string {
    if (!slug) return '';
    return slug.toLowerCase().trim().replace(/\s+/g, '-');
  }

}
