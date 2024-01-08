import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from 'src/app/data-type';

@Component({
  selector: 'app-womens-jackets',
  templateUrl: './womens-jackets.component.html',
  styleUrls: ['./womens-jackets.component.css']
})
export class WomensJacketsComponent implements OnInit{
  productList: undefined | product[];
  
  constructor( private productService: ProductsService){
  }

  ngOnInit(): void {
    this.productService.productListWomensJackets().subscribe((result)=>{
      console.warn('mens',result);
      if(result){
        this.productList = result;
      }
    })
  }

}
