import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  username: string;
  showMessage: boolean;
  showError: boolean;

  getPassword() {

    const accessToken = localStorage.getItem('access_token');

    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });

    const options = { headers: headers };

    this.httpClient
      .get<any>("https://apidev.mobilevoipconnect.com/api/1.0.0/Credentials/ForgotPassword/" + this.username, options)
      .subscribe(
        res => {
          console.log(res);
          this.showMessage = true;
        },
        error => this.showError = true
      );
  }
}
