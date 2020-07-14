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

  constructor(private router: Router, private httpClient: HttpClient) {
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['home']);
    }

  }

  ngOnInit(): void {
  }

  username: string;
  password: string;

  logUserIn() {

    const data = {
      "grant_type": 'password',
      "username": this.username,
      "Password": this.password
    }

    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    const body = new HttpParams({ fromObject: data });

    const options = { headers: headers };

    this.httpClient
      .post<any>("https://apidev.mobilevoipconnect.com/Token", body, options)
      .subscribe(

        res => {

          if (res.access_token) {

            console.log(res);

            localStorage.setItem('access_token', res.access_token);
            localStorage.setItem('expires', res.expires);

            this.router.navigate(['home']);

          } else {
            this.usernameNotFound = true;
          }

        },
        err => {
          this.usernameNotFound = true;
          console.error(err);
        }
      )


  }

}
