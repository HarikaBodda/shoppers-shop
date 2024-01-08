import { Component } from '@angular/core';
import { product } from 'src/app/data-type';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-womens-tops',
  templateUrl: './womens-tops.component.html',
  styleUrls: ['./womens-tops.component.css']
})
export class WomensTopsComponent {
  productList: undefined | product[];
  
  constructor( private productService: ProductsService){
  }

  ngOnInit(): void {
    this.productService.productListWomensTops().subscribe((result)=>{
      console.warn('mens',result);
      if(result){
        this.productList = result;
      }
    })
  }
}
