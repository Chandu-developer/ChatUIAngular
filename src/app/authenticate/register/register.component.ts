import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterUserForm : FormGroup = new FormGroup({});

  constructor(private router : Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.RegisterUserForm = this.formBuilder.group({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      userName : new FormControl(''),
      password : new FormControl(''),

    })
  }

  onSubmit(){
    console.warn(this.RegisterUserForm.value)
}
navigateToLogin(){
  this.router.navigate(["login"])

}

}
