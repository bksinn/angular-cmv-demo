import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() { }  // ...

  public isAuthenticated(): boolean {
    if (localStorage.getItem('access_token')) {
      return true;
    }
    else {
      return false;
    }
  }
}
