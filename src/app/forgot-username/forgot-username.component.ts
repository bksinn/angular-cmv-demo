import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-forgot-username',
  templateUrl: './forgot-username.component.html',
  styleUrls: ['./forgot-username.component.less']
})
export class ForgotUsernameComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  @Input() emailAddress: string;

  showMessage: boolean;
  showError: boolean;

  getUsername() {

    const body = {"emailAddress" : this.emailAddress};

    this.httpClient
      .post<any>("https://apidev.mobilevoipconnect.com/api/1.0.0/Credentials/ForgotUsername", body)
      .subscribe(
        res => {
          console.log(res);
          this.showMessage = true;
        },
        error => this.showError = true
      );
  }
}
