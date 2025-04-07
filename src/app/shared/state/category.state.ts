import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { GetCategories, GetCategoryBySlug, GetSearchByCategory } from "../action/category.action";
import { Category } from "../../shared/interface/category.interface";
import { CategoryService } from "../services/category.service";
import { CategoryOption } from "../data/categoryOption";

export class CategoryStateModel {
  category = {
    data: [] as Category[],
    total: 0
  }
  searchByCategory: Category[]
  selectedCategory: Category | null
}

@State<CategoryStateModel>({
  name: "category",
  defaults: {
    category: {
      data: [],
      total: 0
    },
    searchByCategory: [],
    selectedCategory: null
  },
})
@Injectable()
export class CategoryState {
  
  constructor(private categoryService: CategoryService) {}

  @Selector()
  static category(state: CategoryStateModel) {
    return state.category;
  }

  @Selector()
  static searchByCategory(state: CategoryStateModel) {
    return state.searchByCategory;
  }

  @Selector()
  static selectedCategory(state: CategoryStateModel) {
    return state.selectedCategory;
  }

  @Action(GetCategories)
  getCategories(ctx: StateContext<CategoryStateModel>, action: GetCategories) {
    return this.categoryService.getCategories(action.payload).pipe(
      tap({
        next: result => { 
          ctx.patchState({
            category: {
              data: CategoryOption,
              total: result?.total ? result?.total : result.data.length
            }
          });
        },
        error: err => { 
          throw new Error(err?.error?.message);
        }
      })
    );
  }

  @Action(GetSearchByCategory)
  getSearchByCategory(ctx: StateContext<CategoryStateModel>, action: GetSearchByCategory) {
    this.categoryService.searchSkeleton = true;
    return this.categoryService.getCategories(action.payload).pipe(
      tap({
        next: result => { 
          ctx.patchState({
            searchByCategory: result ? result?.data : []
          });
        },
        error: err => { 
          throw new Error(err?.error?.message);
        },
        complete: () => {
          this.categoryService.searchSkeleton = false;
        }
      })
    );
  }

  @Action(GetCategoryBySlug)
  getCategoryBySlug(ctx: StateContext<CategoryStateModel>, action: GetCategoryBySlug) {
    return this.categoryService.getCategoryBySlug(action.slug).pipe(
      tap({
        next: result => { 
          const state = ctx.getState();
          ctx.patchState({
            ...state,
            selectedCategory: result
          });
        },
        error: err => { 
          throw new Error(err?.error?.message);
        }
      })
    );
  }

}