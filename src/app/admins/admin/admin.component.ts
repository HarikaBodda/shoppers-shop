import { Component, EventEmitter, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { SignIn, SignUp } from 'src/app/data-type';
import { UserService } from 'src/app/Sellers/seller-service/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  authError:string = " ";
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  constructor(private adminService:AdminService, private route:Router, private http: HttpClient){}

  ngOnInit(): void {
    this.adminService.reloadSeller();
  }
  signUp(data:SignUp):void{
    console.warn(data);
    this.adminService.userSignUp(data);
  }

  signIn(data:SignIn):void{
    console.warn(data);
    this.adminService.userSignIn(data);
    this.adminService.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError = "Email or Password is not correct"
      }
    })
  }

  
}
