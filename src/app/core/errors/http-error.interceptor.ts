import {
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
  HttpInterceptor
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { ErrorDialogService } from "../../shared/errors/error-dialog.service";
import { LoadingDialogService } from "../../shared/loading/loading-dialog.service";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  count = 0;

  constructor(
    private errorDialogService: ErrorDialogService,
    private loadingDialogService: LoadingDialogService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingDialogService.openDialog();
    this.count++;
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.loadingDialogService.hideDialog();
        let errorMessage = "";

        if (!navigator.onLine) {
          errorMessage = "No internet connection!";
        } else if (error.error instanceof Error) {
          errorMessage = `An error occurred: ${error.error.message}`;
        } else {
          errorMessage = `${JSON.stringify(error, undefined, 2)}`;
        }

        console.error('Error from error interceptor', error);
        console.error(errorMessage);
        this.errorDialogService.openDialog(errorMessage, error.status);
        return throwError(error);
      }),
      finalize(() => {
        this.count--;
        if (this.count === 0) {
          this.loadingDialogService.hideDialog();
        }
      })
    ) as Observable<HttpEvent<any>>;
  }
}
