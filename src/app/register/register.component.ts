import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    passwordConfirm: new FormControl(null, [Validators.required])
  }
  );

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  register() {
    if (!this.registerForm.valid) {
      return;
    } if(this.registerForm.value.password != this.registerForm.value.passwordConfirm){
      return;
    }else {
      this.apiService.fetchRegister(
        this.registerForm.value.email != null ? this.registerForm.value.email: '', 
        this.registerForm.value.password!= null ? this.registerForm.value.password: 'a' 
      ).subscribe();
    }
  } 
}
