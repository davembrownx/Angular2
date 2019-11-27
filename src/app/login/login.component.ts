import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError: boolean;
  loginErrorMessage: string;
  loginForm: FormGroup;
  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  login() {
    if (!this.loginForm.valid) {
      this.loginError = true;
      this.loginErrorMessage = 'Invalid form';
    }
    else{
      this.authService.authenticate();
      this.router.navigate(['']);
    }
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.createForm();
  }

}
