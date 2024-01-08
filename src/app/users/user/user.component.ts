import { Component, OnInit } from '@angular/core';
import { SignIn, SignUp, cart, product } from '../../data-type';
import { UserService } from 'src/app/Sellers/seller-service/user.service';
import { UserAgentService } from '../Service/user-agent.service';
import { SellerProductsService } from 'src/app/Sellers/seller-service/seller-products.service';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  authError:string="";

  constructor(private userService: UserAgentService, private product: ProductsService){}

  ngOnInit(): void {
    this.userService.userAuthReload()
  }
  userSignUp(data:SignUp){
    console.log(data);
    this.userService.userSignUp(data)
  }

  userSignIn(val:SignIn){
    console.warn(val)
    this.userService.userLogin(val);
    this.userService.invalidUserAuth.subscribe((result)=>{
      console.warn(result);
      if(result){
        this.authError = "user not found"
      }else{
        this.localCartToRemoteCart()
      }
      
    })
  }

  localCartToRemoteCart(){
    console.warn("called");
    
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
    let userId= user && JSON.parse(user).id;
     if(data){
      let cartDataList:product[]= JSON.parse(data);
   
      cartDataList.forEach((product:product, index)=>{
        let cartData:cart={
          ...product,
          productId:product.id,
          userId
        }
        //delete cartData.id;
        setTimeout(() => {
          this.product.addToCart(cartData).subscribe((result)=>{
            if(result){
              console.warn("data is stored in DB");
            }
          })
        }, 500);
        if(cartDataList.length===index+1){
          localStorage.removeItem('localCart')
        }
      })
     }
 
     setTimeout(() => {
      this.product.getCartList(userId)
     }, 2000);
     
   }
 


  // localCartToRemoteCart(){
  //   let data = localStorage.getItem('localCart');
  //   if(data){
  //     let cartDataList: product[] = JSON.parse(data);
  //     let user = localStorage.getItem('user');
  //     let userId = user && JSON.parse(user).id;
  //     cartDataList.forEach((product: product, index) => {
  //       let cartData: cart= {
  //         ...product,
  //         productId: product.id,
  //         userId
  //       }
  //      setTimeout(() => {
  //       this.product.addToCart(cartData).subscribe((result)=>{
  //         if(result){
  //           console.warn("data is stored in db")
  //         }
  //       })
  //      }, 500);
  //      if(cartDataList.length===index+1){
  //       localStorage.removeItem('localCart')
  //      }
  //     });
  //   }
  // }

  
}
