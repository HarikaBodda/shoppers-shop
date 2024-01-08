import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/services/products.service';
import { PriceSummary, cart } from '../data-type';
import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  faTrash = faTrash;
  productList: undefined | cart[];
  productDeleteMessage: undefined | string;
  cartdata:cart[]|undefined;
  priceSummary:PriceSummary={
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }
  constructor(private productService: ProductsService, private route: Router){}


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

  checkout() {
    this.route.navigate(['/checkout'])
  }

  deleteProduct(id:number) {
    console.warn(id);
    // this.productService.deleteProduct(id).subscribe((result) => {
    //   if (result) {
    //     this.productDeleteMessage = " Product is deleted";
    //     //this.updatedList();

    //   }
    // })
    // setTimeout(() => {
    //   this.productDeleteMessage = undefined;
    // }, 3000)
  }

   updatedList() {
     this.productService.productsList().subscribe((result) => {
       console.warn(result);
      //  if (result) {
      //    this.productList = result;
      //    console.warn(result);
        
      //  }
     })
   }
}
