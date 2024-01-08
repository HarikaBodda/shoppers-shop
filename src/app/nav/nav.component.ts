import { Component, OnInit } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  sellerName:string = "";
  menuType: string = "default";
  userName:string = "";
  adminName:string = "";
  cartItems = 0;
  constructor(private route: Router, private productService: ProductsService) { }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        console.warn(val.url);
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.warn("this is seller area");
          let sellerStore=localStorage.getItem('seller');
          console.log(sellerStore)
          let sellerData =sellerStore && JSON.parse(sellerStore);
          console.log(sellerData);
            this.sellerName=sellerData.fname;
          this.menuType = "seller"
        } else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.fname;
          this.menuType = "user"
          this.productService.getCartList(userData.id)
        } else if(localStorage.getItem('admin')){
          let adminStore = localStorage.getItem('admin');
          let adminData = adminStore && JSON.parse(adminStore);
          this.adminName = adminData.fname;
          this.menuType = "admin"
        } else {
          console.warn("outside seller area")
          this.menuType = "default"
        }
      }
    })
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      this.cartItems = JSON.parse(cartData).length;
    }
    this.productService.cartData.subscribe((items)=>{
      this.cartItems = items.length;
    })
  }

  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/home'])
  }

  adminLogout(){
    localStorage.removeItem('admin');
    this.route.navigate(['/home'])
  }
  userLogOut(){
    localStorage.removeItem('user');
    this.route.navigate(['/home'])
    this.productService.cartData.emit([])
  }
}
