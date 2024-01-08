import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignIn, SignUp } from 'src/app/data-type';

@Injectable({
  providedIn: 'root'
})
export class UserAgentService {
  invalidUserAuth = new EventEmitter<boolean>(false)

  url = 'http://localhost:3000/user';


  constructor(private http: HttpClient, private route: Router) { }

  userSignUp(user: SignUp) {
    console.warn(user);
    this.http.post(this.url, user, { observe: 'response' })
      .subscribe((result) => {
        console.log(result);
        if (result) {
          localStorage.setItem('user', JSON.stringify(result.body));
          this.route.navigate(['/'])
        }
      })
  }

  userAuthReload() {
    if (localStorage.getItem('user')) {
      this.route.navigate(['/'])
    }
  }


  userLogin(data: SignIn) {
    this.http.get(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
      { observe: 'response' })
      .subscribe((result: any) => {
        if (result && result.body?.length) {
          localStorage.setItem('user', JSON.stringify(result.body[0]));
          this.route.navigate(['/']);
          this.invalidUserAuth.emit(false)
        } else {
          this.invalidUserAuth.emit(true)
        }
      })
  }
}

