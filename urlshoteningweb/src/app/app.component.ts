import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClipboardService } from 'ngx-clipboard';
import { HttpClient } from "@angular/common/http";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'urlshorteningweb';
  OriginalUrl = '';
  Url = '';
  DateExpire: any;
  constructor(
    private clipboardApi: ClipboardService,
    private _snackBar: MatSnackBar,
    private http: HttpClient,
    private datepipe: DatePipe,
  ) { }

  generate() {
    // console.log(this.DateExpire)
    // console.log(this.datepipe.transform(this.DateExpire, 'yyyy-MM-ddThh:mm:ss'))
    this.http.post("http://localhost:8080/generate", {
      url: this.OriginalUrl,
      expirationDate: this.datepipe.transform(this.DateExpire, 'yyyy-MM-ddThh:mm:ss'),
    }).subscribe((data: any) => {
      this.Url = "http://localhost:8080/" + data.shortLink
    })
  }

  copyText() {
    if (this.clipboardApi.copyFromContent(this.Url)) {
      this._snackBar.open("Coppie!!", "OK", {
        duration: 1000
      });
    }
  }
}
