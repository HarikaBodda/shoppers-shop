import { Component, Input, OnInit } from '@angular/core';
import { PriceSummary, cart, orderNow } from 'src/app/data-type';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  cartdata:cart[]|undefined;
  priceSummary:PriceSummary={
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }

  constructor(private productService:ProductsService){}
  ngOnInit(): void {
    this.productService.currentCart().subscribe((result)=>{
      this.cartdata = result;
      console.warn(this.cartdata);
      let price = 0;
      result.forEach((item)=>{
        if(item.quantity){
        price = price + (+item.offerPrice* item.quantity)
        }
      })
      this.priceSummary.price = price;
      this.priceSummary.discount = price/10;
      this.priceSummary.tax = price/10;
      this.priceSummary.delivery = 100;
      this.priceSummary.total = price + (price/10)+100-(price/10);

      console.warn(this.priceSummary);
      
    }) 
    
  }



  orderNow(data:orderNow){
    let user = localStorage.getItem('user');
    let userId =  user && JSON.parse(user).id;
    if(this.priceSummary){
      let orderData:orderNow = {
        ...data,
        price: this.priceSummary.price,
        discount: this.priceSummary.discount,
        tax: this.priceSummary.tax,
        delivery: this.priceSummary.delivery,
        total: this.priceSummary.total,
        userId,
        id: undefined
        
      }

    console.warn(orderData);
      this.productService.orderNow(orderData).subscribe((res)=>{
        if(res){
          alert("order received")
        }
      })
    }
    
  }
}
