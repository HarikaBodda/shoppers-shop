import { Component, OnInit } from '@angular/core';
import { cart, orderNow } from 'src/app/data-type';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit{
  productList: undefined | cart[];
  productDeleteMessage: undefined | string;
  orderData: orderNow[]|undefined;
  constructor(private productService:ProductsService){}

  ngOnInit(): void {
    this.updatedList();

    this.productService.orderList().subscribe((result)=>{
      //this.orderData = result;
      console.warn(result)
    })
  }



  deleteProduct(id:any) {
    console.warn(id);
    this.productService.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productDeleteMessage = " Product is deleted";
        this.updatedList();

      }
    })
    setTimeout(() => {
      this.productDeleteMessage = undefined;
    }, 3000)
  }

  updatedList() {
    this.productService.productsList().subscribe((result) => {
      console.warn(result);
      if (result) {
        this.productList = result;
      }
    })
  }


}
