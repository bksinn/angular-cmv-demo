import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  usernameNotFound: boolean = false;

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  logUserIn() {

    const data = {
      "grant_type": 'password',
      "username": 'patrick810',
      //"password": encodeURIComponent('Chrome@198')
      "password": 'ej2X,xrh_$4}MmM\\'
    }

    //const data = "grant_type=password&username=chromeapi&password=Chrome@198";

    //let body = new URLSearchParams();
    //body.set('grant_type', 'password');
    //body.set('username', 'chromeapi');
    //body.set('password', 'Chrome@198');

    //const formData: FormData = new FormData();
    //formData.append('grant_type', 'password');
    //formData.append('username', 'chromeapi');
    //formData.append('password', 'Chrome@198');

    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    const body = new HttpParams({ fromObject: data });

    const options = { headers: headers };

    this.httpClient
      .post<any>("https://apidev.mobilevoipconnect.com/Token", body.toString(), options)
      .subscribe(res => {
        if (res.access_token) {
          this.router.navigate(['home']);
        }
      });

  }

  triggerWarning($event) {
    let userName = $event.target.value;

    if (userName.length > 3) {
      this.usernameNotFound = true;
    }
    else {
      this.usernameNotFound = false;
    }
  }

}
