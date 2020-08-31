import { ErrorHandler, Injectable } from "@angular/core";
import { ErrorDialogService } from "../../shared/errors/error-dialog.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private errorDialogService: ErrorDialogService) {}

  handleError(error: Error) {
    this.errorDialogService.openDialog(
      error.message || "Undefined client error"
    );
    console.error("Error from global error handler", error);
  }
}
