import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store, Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { GetProducts, GetStoreProducts, GetCategoryProducts, GetRelatedProducts, GetProductBySlug, GetDealProducts, GetProductBySearch, GetMenuProducts, GetProductByIds } from "../action/product.action";
import { Product, ProductModel } from "../interface/product.interface";
import { ProductService } from "../services/product.service";
import { ThemeOptionService } from "../services/theme-option.service";

export class ProductStateModel {
  product = {
    data: [] as Product[],
    total: 0
  }
  selectedProduct: Product | null;
  categoryProducts: Product[] | [];
  relatedProducts: Product[] | [];
  storeProducts: Product[] | [];
  dealProducts: Product[] | [];
  menuProducts: Product[] | [];
  productBySearch: Product[] | [];
  productByIds: Product[] | [];
}

@State<ProductStateModel>({
  name: "product",
  defaults: {
    product: {
      data: [],
      total: 0
    },
    selectedProduct: null,
    categoryProducts: [],
    relatedProducts: [],
    storeProducts: [],
    dealProducts: [],
    menuProducts: [],
    productBySearch: [],
    productByIds: []
  },
})
@Injectable()
export class ProductState {

  constructor(private store: Store, private router: Router,
    private productService: ProductService, private themeOptionService: ThemeOptionService) {}

  @Selector()
  static product(state: ProductStateModel) {
    return state.product;
  }

  @Selector()
  static selectedProduct(state: ProductStateModel) {
    return state.selectedProduct;
  }

  @Selector()
  static relatedProducts(state: ProductStateModel) {
    return state.relatedProducts;
  }

  @Selector()
  static categoryProducts(state: ProductStateModel) {
    return state.categoryProducts;
  }

  @Selector()
  static storeProducts(state: ProductStateModel) {
    return state.storeProducts;
  }

  @Selector()
  static dealProducts(state: ProductStateModel) {
    return state.dealProducts;
  }

  @Selector()
  static menuProducts(state: ProductStateModel) {
    return state.menuProducts;
  }

  @Selector()
  static productBySearch(state: ProductStateModel) {
    return state.productBySearch;
  }

  @Selector()
  static productByIds(state: ProductStateModel) {
    return state.productByIds;
  }

  @Action(GetProducts)
  getProducts(ctx: StateContext<ProductStateModel>, action: GetProducts) {
    this.productService.skeletonLoader = true;
    if (action.payload) { 
      action.payload['store_id'] = '19';
    }
    return this.productService.getProducts(action.payload).pipe(
      tap({
        next: (result: ProductModel) => {
          ctx.patchState({
            product: {
              data: result.data,
              total: result?.total ? result?.total : result.data?.length
            }
          });
        },
        complete: () => {
          this.productService.skeletonLoader = false;
        },
        error: err => {
          throw new Error(err?.error?.message);
        }
      })
    );
  }

  @Action(GetRelatedProducts)
  getRelatedProducts(ctx: StateContext<ProductStateModel>, action: GetProducts) {
    this.themeOptionService.preloader = true;
    if (action.payload) { action.payload['store_id'] = 19 }
    return this.productService.getProducts(action.payload).pipe(
      tap({
        next: (result: ProductModel) => {
          const state = ctx.getState();
          ctx.patchState({
            ...state,
            relatedProducts: result.data
          });
        },
        complete: () => {
          this.themeOptionService.preloader = false;
        },
        error: err => {
          throw new Error(err?.error?.message);
        }
      })
    );
  }

  @Action(GetCategoryProducts)
  getCategoryProducts(ctx: StateContext<ProductStateModel>, action: GetProducts) {
    if (action.payload) { action.payload['store_id'] = 19 }
    return this.productService.getProducts(action.payload).pipe(
      tap({
        next: (result: ProductModel) => {
          const state = ctx.getState();
          ctx.patchState({
            ...state,
            product: {
              data: [...state.product.data, ...result.data],
              total: state.product.data.length + result.data.length
            },
            categoryProducts: result.data
          });
        },
        complete: () => {
          this.themeOptionService.preloader = false;
        },
        error: err => {
          throw new Error(err?.error?.message);
        }
      })
    );
  }

  @Action(GetStoreProducts)
  getStoreProducts(ctx: StateContext<ProductStateModel>, action: GetProducts) {
    if (action.payload) { action.payload['store_id'] = 19 }
    return this.productService.getProducts(action.payload).pipe(
      tap({
        next: (result: ProductModel) => {
          const state = ctx.getState();
          ctx.patchState({
            ...state,
            storeProducts: result.data
          });
        },
        error: err => {
          throw new Error(err?.error?.message);
        }
      })
    );
  }

  @Action(GetProductBySlug)
  getProductBySlug(ctx: StateContext<ProductStateModel>, { slug }: GetProductBySlug) {
    this.themeOptionService.preloader = true;
    return this.productService.getProductBySlug(slug).pipe(
      tap({
        next: result => {
          result.related_products = result.related_products && result.related_products.length ? result.related_products : [];
          result.cross_sell_products = result.cross_sell_products && result.cross_sell_products.length ? result.cross_sell_products : [];

          const ids = [...result.related_products, ...result.cross_sell_products];
          const categoryIds = [...result?.categories?.map(category => category.id)];
          this.store.dispatch(new GetRelatedProducts({ids: ids?.join(','), category_ids: categoryIds?.join(','), status: 1}));

          const state = ctx.getState();
          ctx.patchState({
            ...state,
            selectedProduct: result
          });
        },
        complete: () => {
          this.themeOptionService.preloader = false;
        },
        error: err => {
          this.router.navigate(['/404']);
          throw new Error(err?.error?.message);
        }
      })
    );
  }

  @Action(GetDealProducts)
  getDealProducts(ctx: StateContext<ProductStateModel>, action: GetDealProducts) {
    if (action.payload) { action.payload['store_id'] = 19 }
    return this.productService.getProducts(action.payload).pipe(
      tap({
        next: (result: ProductModel) => {
          const state = ctx.getState();
          ctx.patchState({
            ...state,
            dealProducts: result.data
          });
        },
        error: err => {
          throw new Error(err?.error?.message);
        }
      })
    );
  }

  @Action(GetMenuProducts)
  getMenuProducts(ctx: StateContext<ProductStateModel>, action: GetMenuProducts) {
    if (action.payload) { action.payload['store_id'] = 19 }
    return this.productService.getProducts(action.payload).pipe(
      tap({
        next: (result: ProductModel) => {
          const state = ctx.getState();
          ctx.patchState({
            ...state,
            menuProducts: result.data
          });
        },
        error: err => {
          throw new Error(err?.error?.message);
        }
      })
    );
  }

  @Action(GetProductBySearch)
  getProductBySearch(ctx: StateContext<ProductStateModel>, action: GetProductBySearch) {
    this.productService.searchSkeleton = true;
    if (action.payload) { action.payload['store_id'] = 19 }
    return this.productService.getProductBySearch(action.payload).pipe(
      tap({
        next: (result) => {
          ctx.patchState({
            productBySearch: result,
          });
        },
        complete: () => {
          this.productService.searchSkeleton = false;
        },
        error: err => {
          throw new Error(err?.error?.message);
        }
      })
    );
  }

  @Action(GetProductByIds)
  getProductByIds(ctx: StateContext<ProductStateModel>, action: GetProductByIds) {
    if (action.payload) { action.payload['store_id'] = 19 }
    return this.productService.getProducts(action.payload).pipe(
      tap({
        next: (result: ProductModel) => {
          const state = ctx.getState();
          ctx.patchState({
            ...state,
            productByIds: result.data
          });
        },
        error: err => {
          throw new Error(err?.error?.message);
        }
      })
    );
  }


}
