import { Component } from '@angular/core';
import { product } from 'src/app/data-type';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-mens-jeans',
  templateUrl: './mens-jeans.component.html',
  styleUrls: ['./mens-jeans.component.css']
})
export class MensJeansComponent {
  productList: undefined | product[];

  constructor( private productService: ProductsService){
  }

  ngOnInit(): void {
    this.productService.productListMensJeans().subscribe((result)=>{
      console.warn('mens',result);
      if(result){
        this.productList = result;
      }
    })
  }

}
