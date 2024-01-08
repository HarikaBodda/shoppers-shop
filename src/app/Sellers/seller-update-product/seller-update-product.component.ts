import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellerProductsService } from '../seller-service/seller-products.service';
import { sellerProduct } from 'src/app/data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined| sellerProduct;
  productMessage: undefined|string;

  constructor(private route: ActivatedRoute, private sellerService: SellerProductsService) { }
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId && this.sellerService.getProduct(productId).subscribe((data)=>{
      console.warn(data);
      this.productData = data;
    })
  }

  submit(data: any) {
    console.log(data);
    if(this.productData){
      data.id = this.productData.id;
    }
    this.sellerService.updateProduct(data).subscribe((result)=>{
      return result
      // if(result){
      //   this.productMessage = "Product has Updated"
      // }
    })
    // setTimeout(()=>{
    //   this.productMessage = undefined;
    // }, 3000)
  }
}
