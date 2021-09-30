import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginUserForm : FormGroup = new FormGroup({});


  constructor(private router:Router,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.LoginUserForm = this.formBuilder.group({
      username : new FormControl(''),
      password : new FormControl('')

    })
  }

  onSubmit(){
    console.warn(this.LoginUserForm.value)
    // alert("Logged in successfullu")
  }

  navigateRegister(){
    this.router.navigate(["register"])
  }
}
