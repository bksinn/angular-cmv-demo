import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  usernameNotFound: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logUserIn() {
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
