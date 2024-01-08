import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SignIn, SignUp } from 'src/app/data-type';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  url = 'http://localhost:3000/sellers'

  constructor(private http: HttpClient, private route: Router) { }

  getData(){
    return this.http.get<SignUp[]>(this.url);
  }

  deleteProduct(id: number){
    return this.http.delete(`http://localhost:3000/sellers/${id}`)
  }

  userSignUp(data:SignUp){
    return this.http.post(this.url,data,{observe:'response'}).
    subscribe((result)=>{
      console.warn(result);
      if(result){
        localStorage.setItem('admin', JSON.stringify(result.body))
        this.route.navigate(['/seller-data'])
      }
    })
  }

  reloadSeller(){
    if(localStorage.getItem('admin')){
      this.isUserLoggedIn.next(true)
      this.route.navigate(['/seller-data'])
    }
  }

  userSignIn(data:SignIn){
    this.http.get(`http://localhost:3000/admins?email=${data.email}&password=${data.password}`,
    {observe: 'response'}).subscribe((res:any)=>{
      console.warn(res)
      if(res && res.body && res.body.length===1){
        localStorage.setItem('admin', JSON.stringify(res.body))
        this.route.navigate(['/seller-data'])
      }else{
        this.isLoginError.emit(true)
      }
    })
  }
}
