import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { LoggingService } from '../../shared/services/logging.service';
import { ErrorService } from '../../shared/services/error.service';
import { NotificationService } from '../../shared/services/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    // Error handling is important and needs to be loaded first.
    // Because of this we should manually inject the services with Injector.
    constructor(private injector: Injector) { } 

    handleError(error: Error | HttpErrorResponse) {
        const errorService = this.injector.get(ErrorService);
        const logger = this.injector.get(LoggingService);
        const notifier = this.injector.get(NotificationService);
    
        let message;
        
        if (error instanceof HttpErrorResponse) {
          // Server error
          message = errorService.getServerErrorMessage(error);
          if(!message.includes('allCitiesList') && !message.includes('Http failure response for')) {
            notifier.showError(message);
          }
        } else {
          // Client Error
          message = errorService.getClientErrorMessage(error);
          if(!message.includes('Something Went Wrong') && !message.includes('Http failure response for')) {
            notifier.showError(message);
          }
        }
        // Always log errors
        logger.logError(message);
    }

}