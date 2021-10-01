import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    // const check = !!localStorage.getItem('token')
    // console.log("final is ",check)
    // return !!localStorage.getItem('token')
      return true
  }
}
