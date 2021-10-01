import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/authenticate_services/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterUserForm : FormGroup = new FormGroup({});

  constructor(private router : Router, 
    private formBuilder : FormBuilder, 
    private registerService : RegisterService ) { }

  ngOnInit(): void {
    this.RegisterUserForm = this.formBuilder.group({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      userName : new FormControl(''),
      password : new FormControl(''),

    })
  }

  onSubmit(){
    this.registerService.register().subscribe(data =>
      console.log(data) );
    console.warn(this.RegisterUserForm.value)
}
navigateToLogin(){
  this.router.navigate(["login"])

}

}
