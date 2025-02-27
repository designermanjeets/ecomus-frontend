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

  initiateSubPaisa(data: any): Observable<any> {
    return new Observable(observer => {
      fetch(`${environment.URL}/initiate-payment`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Ensure JSON data format
        },
        body: JSON.stringify(data)
      })
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

  initiateNeoKredIntent(data: any): Observable<any> {
    return new Observable(observer => {
      fetch(`${environment.URL}/payin/api/v2/t1/external/upi/qr/generate/intent`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          const sampleSuccessData = {
              "status": "INITIATED",
              "upiIntentString": "upi://pay?pa=neo.nktest@finobank&pn=Neokred%20Testing&mc=4722&tr=NKFV25MnxbamiuX2yH4prBzKrYU&tn=Test&am=2&cu=INR&mode=05&orgid=187064&catagory=01&url=https://www.finobank.com/&sign=MEUCIE8Z5drg7nT1H/SJuWwSSIR3fqTl5b8XwIE24ofSts/oAiEArL0YOAtyuGOz7btmSKgpcm8OvKs06R2TipWg5e81DW8=",
              "amount": 2,
              "transactionId": "NKFV25MnxbamiuX2yH4prBzKrYU",
              "orderId": "NKOjXCK6q3RKDg2VxKSHjzXoD",
              "refId": "11076d22-1874-4524-815f-68499040f763"
          };
          observer.next(sampleSuccessData);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  checkTransectionStatusNeoKred(neoKredIntent: any) {
    return new Observable(observer => {
      fetch(`${environment.URL}/payin/api/v2/t1/external/upi/qr/status`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(neoKredIntent)
      })
        .then(response => response.json())
        .then(data => {
          const sampleNeoKredPaymentSuccessData = {
              "upiId": "1234567890@okaxis",
              "amount": "1.00",
              "custRefNo": "436252327683",
              "mcc": "1234",
              "transactionId": "NKFV25ckGdVy6w7Fh4oVr5LWhvm",
              "upiTxnId": "SBI0cdde598916b440bb7966a7c4e3ae0c0",
              "txnTime": "NA",
              "orderId": "NKOqFkASKcsx4QrWU3C5vxEXJ",
              "refId": "30eb1146-30d3-47d1-a7d2-36e66586fcab",
              "status": "SUCCESS",
              "customerName":"CUSTOMER NAME"
          };
          observer.next(sampleNeoKredPaymentSuccessData);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  initiateCashFreeIntent(data: any): Observable<any> {
    return new Observable(observer => {
      fetch(`${environment.URL}/generate-cash-free`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
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

  initiateZyaadaPayIntent(data: any): Observable<any> {
    return new Observable(observer => {
      fetch(`${environment.URL}/zyaadapaisa-initiate-payment`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
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

  checkTransectionStatusZyaadaPay(uuid: any, payment_method: string) {
    return this.http.post<any>(`${environment.URL}/check-payment-response`,{ uuid: uuid, payment_method});
  }

  checkTransectionStatusCashFree(uuid: any, payment_method: string) {
    return this.http.post<any>(`${environment.URL}/check-payment-response`,{ uuid: uuid, payment_method});
  }

  checkPaymentResponse(uuid: any, payment_method: string): Observable<any> {
    return this.http.post<any>(`${environment.URL}/check-payment-response`,{ uuid: uuid, payment_method});
  }

  redirectToPayUrl() {
    return this.http.post<any>(`${environment.URL}/payment-response`,{});
  }

}
