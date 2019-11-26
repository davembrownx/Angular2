import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authResponse = new BehaviorSubject(false);
  public authenticated = this.authResponse.asObservable();

  constructor() { }

  authenticate(){
    this.authResponse.next(true)
  }

  logout(){
    this.authResponse.next(false)
  }
}
