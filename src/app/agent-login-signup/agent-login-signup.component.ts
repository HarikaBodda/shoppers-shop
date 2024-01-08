import { Component, OnInit } from '@angular/core';
import { UserService } from '../Sellers/seller-service/user.service';
import { Router } from '@angular/router';
import { SignIn, SignUp } from '../data-type';

@Component({
  selector: 'app-agent-login-signup',
  templateUrl: './agent-login-signup.component.html',
  styleUrls: ['./agent-login-signup.component.css']
})
export class AgentLoginSignupComponent {
  // authError:string = " ";
  // constructor(private userService:UserService, private route:Router){}

  // ngOnInit(): void {
  //   this.userService.reloadUser();
  // }
  // signUp(data:SignUp):void{
  //   console.warn(data);
  //   this.userService.userSignUp(data);
  // }

  // signIn(data:SignIn):void{
  //   console.warn(data);
  //   this.userService.userSignIn(data);
  //   this.userService.isLoginError.subscribe((isError)=>{
  //     if(isError){
  //       this.authError = "Email or Password is not correct"
  //     }
  //   })
  // }

  
}
