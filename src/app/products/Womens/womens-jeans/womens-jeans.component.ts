import { Component } from '@angular/core';
import { product } from 'src/app/data-type';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-womens-jeans',
  templateUrl: './womens-jeans.component.html',
  styleUrls: ['./womens-jeans.component.css']
})
export class WomensJeansComponent {
  productList: undefined | product[];

  constructor( private productService: ProductsService){
  }

  ngOnInit(): void {
    this.productService.productListWomensJeans().subscribe((result)=>{
      console.warn('mens',result);
      if(result){
        this.productList = result;
      }
    })
  }

}
