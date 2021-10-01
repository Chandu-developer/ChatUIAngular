import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms'
import {LoginService} from 'src/app/authenticate_services/login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginUserForm : FormGroup = new FormGroup({});


  constructor(private router:Router,
    private formBuilder : FormBuilder,
     private loginService : LoginService) { }

  ngOnInit(): void {
    this.LoginUserForm = this.formBuilder.group({
      username : new FormControl(''),
      password : new FormControl('')

    })
  }

  onSubmit(){
    this.loginService.login().subscribe(data =>
      {if(data ==true){
      this.router.navigate(['chat/home'])
      }
      else{
        alert('invalid username or password')
      }
    }
      );
    // alert("Logged in successfullu")
  }

  navigateRegister(){
    this.router.navigate(["register"])
  }
}
