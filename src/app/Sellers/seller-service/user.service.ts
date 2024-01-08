import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { SignIn, SignUp } from '../../data-type';
import { BehaviorSubject } from 'rxjs';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  url = 'http://localhost:3000/sellers'

  constructor(private http:HttpClient, private route: Router) { }

   userSignUp(data:SignUp){
    return this.http.post(this.url,data,{observe:'response'}).
    subscribe((result)=>{
      console.warn(result);
      if(result){
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.route.navigate(['/seller-home'])
      }
    })
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isUserLoggedIn.next(true)
      this.route.navigate(['/seller-home'])
    }
  }

  userSignIn(data:SignIn){
    this.http.get(`http://localhost:3000/sellers?email=${data.email}&password=${data.password}`,
    {observe: 'response'}).subscribe((res:any)=>{
      console.warn(res)
      if(res && res.body && res.body.length===1){
        localStorage.setItem('seller', JSON.stringify(res.body))
        this.route.navigate(['seller-home'])
      }else{
        this.isLoginError.emit(true)
      }
    })
  }
}
