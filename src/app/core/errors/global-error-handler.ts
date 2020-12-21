import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { ErrorDialogService } from "../../shared/errors/error-dialog.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private errorDialogService: ErrorDialogService, private zone: NgZone) {}

  handleError(error: Error) {

    this.zone.run(() =>
      this.errorDialogService.openDialog(
        error.message || "Undefined client error"
    ));

    console.error("Error from global error handler", error);
  }
}
