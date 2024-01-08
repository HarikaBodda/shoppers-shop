import { Component } from '@angular/core';
import { UserService } from '../seller-service/user.service';
import { Router } from '@angular/router';
import { SignIn, SignUp, file } from '../../data-type';
import { SellerProductsService } from '../seller-service/seller-products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  authError:string = " ";
  constructor(private userService:UserService, private route:Router, private sellerProducts: SellerProductsService, private http: HttpClient){}

  ngOnInit(): void {
    this.userService.reloadSeller();
  }
  signUp(data:SignUp):void{
    console.warn(data);
    this.userService.userSignUp(data);
  }

  signIn(data:SignIn):void{
    console.warn(data);
    this.userService.userSignIn(data);
    this.userService.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError = "Email or Password is not correct"
      }
    })
  }
}
