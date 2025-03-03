import { Injectable, NgZone } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { Router } from '@angular/router';
import { NotificationService } from '../../shared/services/notification.service';
import { Values } from '../../shared/interface/setting.interface';
import { SettingState } from '../../shared/state/setting.state';
import { AuthClear } from '../../shared/action/auth.action';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  @Select(SettingState.setting) setting$: Observable<Values>;

  public isMaintenanceModeOn: boolean = false;

  constructor(private store: Store, private router: Router, private ngZone: NgZone,
    private notificationService: NotificationService) {
    this.setting$.subscribe(setting => {
      this.isMaintenanceModeOn = setting?.maintenance?.maintenance_mode!
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {

    // If Maintenance Mode On
    if(this.isMaintenanceModeOn) {
      this.ngZone.run(() => {
        this.router.navigate(['/maintenance']);
      })
    }

    const token = this.store.selectSnapshot(state => state.auth.access_token);
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          store_id: '19',
        },
      });
    } else {
      req = req.clone({
        setHeaders: {
          store_id: '19',
        },
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // this.notificationService.notification = false;
          this.store.dispatch(new AuthClear());
        }
        return throwError(() => error);
      })
    );

  }
}
