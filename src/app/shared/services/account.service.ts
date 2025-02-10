import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { AccountUser, AccountUserUpdatePassword } from "../interface/account.interface";
import { UserAddress } from "../interface/user.interface";

@Injectable({
  providedIn: "root",
})
export class AccountService {

  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<any> {
    const checkLocalStorage = localStorage.getItem("auth");
    if (checkLocalStorage && JSON.parse(checkLocalStorage).access_token) {
      return this.http.get<AccountUser>(`${environment.URL}/self`);
    } else {
      return new Observable((observer) => {
        observer.next(JSON.parse(checkLocalStorage || '{}'));
        observer.complete();
      });
    }
  }

  updateProfile(payload: AccountUser): Observable<AccountUser> {
    return this.http.post<AccountUser>(`${environment.URL}/updateProfile`, payload);
  }

  updatePassword(payload: AccountUserUpdatePassword): Observable<AccountUserUpdatePassword> {
    return this.http.put<AccountUserUpdatePassword>(`${environment.URL}/updatePassword`, payload);
  }

  createAddress(payload: UserAddress): Observable<UserAddress> {
    return this.http.post<UserAddress>(`${environment.URL}/address`, payload);
  }

  updateAddress(payload: UserAddress, id: number): Observable<UserAddress> {
    return this.http.put<UserAddress>(`${environment.URL}/address/${id}`, payload);
  }

  deleteAddress(id: number): Observable<number> {
    return this.http.delete<number>(`${environment.URL}/address/${id}`);
  }

}
