import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { SellerProductsService } from '../seller-service/seller-products.service';
import { sellerProduct } from 'src/app/data-type';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMessage: string | undefined;
 
  constructor(private sellerProductService: SellerProductsService, private http:HttpClient){}
  

  submit(data: sellerProduct) {
    this.sellerProductService.addProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'Product is added successfully';
      }
    });

    setTimeout(() => {
      this.addProductMessage=undefined
    }, 3000);
  }
}
