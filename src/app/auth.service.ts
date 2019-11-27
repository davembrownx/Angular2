import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CanActivate } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  private authResponse = new BehaviorSubject(false);
  public authenticated = this.authResponse.asObservable();
  constructor() { }

  authenticate(){
    this.authResponse.next(true)
  }

  logout(){
    this.authResponse.next(false)
  }

  canActivate(){
    return this.authenticated
  }
}
