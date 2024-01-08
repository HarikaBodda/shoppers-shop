import { Component } from '@angular/core';
import { UserService } from '../Sellers/seller-service/user.service';
import { SignUp } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {

  constructor(private userService:UserService, private route:Router){}

  // signUp(data:SignUp):void{
  //   console.warn(data);
  //   this.userService.userSignUp(data).subscribe((res)=>{
  //     if(res){
  //       this.route.navigate([''])
  //     }
  //   })
  // }
}
