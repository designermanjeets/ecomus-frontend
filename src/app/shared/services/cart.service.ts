import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "../../../environments/environment";
import { Cart, CartAddOrUpdate, CartModel } from "../interface/cart.interface";

@Injectable({
  providedIn: "root",
})
export class CartService {
  
  private subjectQty = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  getCartItems(): Observable<CartModel> {
    return this.http.get<CartModel>(`${environment.URL}/cart`);
  }

  addToCart(payload: CartAddOrUpdate): Observable<CartModel> {
    return this.http.post<CartModel>(`${environment.URL}/cart`, payload);
  }

  updateQty() {
    this.subjectQty.next(true);
  }

  getUpdateQtyClickEvent(): Observable<boolean>{ 
    return this.subjectQty.asObservable();
  }

  updateCart(payload: CartAddOrUpdate): Observable<CartModel> {
    return this.http.put<CartModel>(`${environment.URL}/cart`, payload);
  }

  replaceCart(payload: CartAddOrUpdate): Observable<CartModel> {
    return this.http.put<CartModel>(`${environment.URL}/replace/cart`, payload);
  }

  deleteCart(id: number): Observable<number> {
    return this.http.delete<number>(`${environment.URL}/cart/${id}`);
  }

  clearCart() {
    return this.http.delete<number>(`${environment.URL}/clear/cart`);
  } 

  syncCart(payload: CartAddOrUpdate[]): Observable<CartModel> {
    return this.http.post<CartModel>(`${environment.URL}/sync/cart`, payload);
  }

  initiateSubPaisa(): Observable<any> {
    // return this.http.get<any>(`${environment.URL}/initiate-payment`);
    // return this.http.get<any>(`https://stage-securepay.sabpaisa.in/SabPaisa/sabPaisaInit?v=1`);
    return new Observable(observer => {
      fetch(`${environment.URL}/initiate-payment`)
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  redirectToPayUrl() {
    return this.http.get<any>(`${environment.URL}/initiate-popup`);
  }

}
