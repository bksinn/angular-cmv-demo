import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

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
      "username": 'chromeapi',
      "password": 'Chrome@198'
    }

    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    const options = { headers: headers };

    this.httpClient
      .post<any>("https://apidev.mobilevoipconnect.com/Token", data, options)
      .subscribe(res => console.log(res));

    this.router.navigate(['home']);

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
