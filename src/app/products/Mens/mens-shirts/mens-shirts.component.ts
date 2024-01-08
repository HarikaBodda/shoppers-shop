import { Component } from '@angular/core';
import { product } from 'src/app/data-type';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-mens-shirts',
  templateUrl: './mens-shirts.component.html',
  styleUrls: ['./mens-shirts.component.css']
})
export class MensShirtsComponent {
  productList: undefined | product[];

  constructor( private productService: ProductsService){
  }

  ngOnInit(): void {
    this.productService.productListMensShirts().subscribe((result)=>{
      console.warn('mens',result);
      if(result){
        this.productList = result;
      }
    })
  }


}
