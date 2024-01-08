import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { cart, product } from 'src/app/data-type';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  productData: undefined | product;
  productQuantity: number = 1;
  removeCart = false;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    let productId = this.activateRoute.snapshot.paramMap.get('productId');
    console.warn(productId);
    productId && this.productService.getProduct(productId).subscribe((result) => {
      console.warn(result);
      this.productData = result;
      let cartData = localStorage.getItem('localCart');
      if (productId && cartData) {
        let items = JSON.parse(cartData);
        items = items.filter((item: product) => {
          productId === item.id.toString();
        })
        console.warn(items);
        if (items.length) {
          this.removeCart = true;
        } else {
          this.removeCart = false;
        }
      }
    })
  }





  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity += 1
    } else if (this.productQuantity > 1 && val === 'minus') {
      this.productQuantity -= 1
    }
  }


  // addToCart(){
  //   if(this.productData){
  //     this.productData.quantity = this.productQuantity;
  //     if(!localStorage.getItem('user')){
  //       this.productService.localAddToCart(this.productData);
  //       this.removeCart=true
  //     }
  //     else{
  //       console.log("user is logged in")
  //        let user = localStorage.getItem('user');
  //        let userId= user && JSON.parse(user).id;
  //        console.warn(userId);

  //        let cartData:cart={
  //          ...this.productData,
  //          productId:this.productData.id,
  //          userId
  //       }

  //       console.warn(cartData)
  //       //delete cartData.id;
  //        this.productService.addToCart(cartData).subscribe((result:any)=>{
  //          if(result){
  //           alert("product is added in cart");

  //       //    this.productService.getCartList(userId);
  //       //    this.removeCart=true
  //          }
  //       })   
  //     }
  //   }  
  // }   

  addToCart() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;
      console.warn(this.productData)
      if (!localStorage.getItem('user')) {
        this.productService.localAddToCart(this.productData);
        this.removeCart = true
      }
    }
  }


  removeToCart(proId: number) {
    this.productService.removeItems(proId)
    this.removeCart = false;
  }
}
