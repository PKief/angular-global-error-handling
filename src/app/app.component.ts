import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

/**
 * @title Basic progress-spinner
 */
@Component({
  selector: "app",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  localError() {
    throw Error("The app component has thrown an error!");
  }

  failingRequest() {
    this.http.get("https://httpstat.us/404?sleep=2000").toPromise();
  }

  successfulRequest() {
    this.http.get("https://httpstat.us/200?sleep=2000").toPromise();
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
