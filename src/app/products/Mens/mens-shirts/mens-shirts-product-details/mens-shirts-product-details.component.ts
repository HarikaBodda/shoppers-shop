import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/data-type';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-mens-shirts-product-details',
  templateUrl: './mens-shirts-product-details.component.html',
  styleUrls: ['./mens-shirts-product-details.component.css']
})
export class MensShirtsProductDetailsComponent {
  productData: undefined|product;
  productQuantity:number = 1;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductsService
    ){}

  ngOnInit(): void {
    let productId = this.activateRoute.snapshot.paramMap.get('productId');
    console.warn(productId);

    productId && this.productService.getProductMensShirts(productId).subscribe((result)=>{
      console.warn(result);
      this.productData = result;
    })
  }

  handleQuantity(val:string){
    if(this.productQuantity<20 && val=== 'plus'){
      this.productQuantity+=1
    }else if(this.productQuantity>1 && val=== 'minus'){
      this.productQuantity-=1
    }
  }
  addToCart() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;
      if(!localStorage.getItem('user')){
        this.productService.localAddToCart(this.productData)
      }
      console.log(this.productData)
    }
  }
}
