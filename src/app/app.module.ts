import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";

import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" }
    }
  ]
})
export class AppModule {}
