import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service'
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
  setEmail: string = this.loginForm.value.email;
  setPassword: string  = this.loginForm.value.password;
  
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

  }
  login() {
    if (!this.loginForm.valid) {
      return;
    }else {
      this.apiService.fetchLogin(this.loginForm.value.email, this.loginForm.value.password).subscribe((res: any) => console.log(res));
    }
  } 
}



