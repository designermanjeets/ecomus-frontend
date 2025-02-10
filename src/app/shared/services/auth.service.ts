import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { AuthNumberLoginState, AuthStateModal, AuthUserForgotModel, AuthUserStateModel, AuthVerifyNumberOTPState, RegisterModal, UpdatePasswordModel, VerifyEmailOtpModel } from "../interface/auth.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {

  public redirectUrl: string | undefined;
  public otpType: string;

  constructor(private http: HttpClient) {}

  register(payload: RegisterModal): Observable<any>{
    return this.http.post(`${environment.URL}/register`, payload);
  }

  login(payload: AuthUserStateModel): Observable<any> {
    return this.http.post(`${environment.URL}/login`, payload);
  }

  loginWithNumber(payload: AuthNumberLoginState): Observable<AuthStateModal>{
    return this.http.post<AuthStateModal>(`${environment.URL}/login/number`,payload)
  }

  forgotPassword(payload: AuthUserForgotModel): Observable<any> {
    return this.http.post(`${environment.URL}/forgot-password`, payload);
  }

  verifyEmailOtp(payload: VerifyEmailOtpModel): Observable<any> {
    return this.http.post(`${environment.URL}/verify-token`, payload);
  }

  verifyNumberOtp(payload: AuthVerifyNumberOTPState): Observable<AuthStateModal> {
    return this.http.post<AuthStateModal>(`${environment.URL}/verify-otp`, payload);
  }

  updatePassword(payload: UpdatePasswordModel): Observable<any> {
    return this.http.post(`${environment.URL}/update-password`, payload);
  }

  logout(): Observable<any> {
    return this.http.post(`${environment.URL}/logout`, {});
  }
  
  validatePinCode(payload: any): Observable<any> {
    return this.http.post(`${environment.URL}/validPincode`, payload);
  }

  fetchAreaPINCodeJSON(): Observable<any> {
    return this.http.get<any>(`${environment.URL}/allCitiesList`);
    // return this.http.get<any>(`assets/pincode_cleaned.json`);
  }


}
