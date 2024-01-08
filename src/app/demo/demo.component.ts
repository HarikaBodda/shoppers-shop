import { Component } from '@angular/core';
import { UserService } from '../Sellers/seller-service/user.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
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
