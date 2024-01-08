import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from 'src/app/data-type';

@Component({
  selector: 'app-mens-jackets',
  templateUrl: './mens-jackets.component.html',
  styleUrls: ['./mens-jackets.component.css']
})
export class MensJacketsComponent implements OnInit{

  productList: undefined | product[];

  constructor( private productService: ProductsService){
  }

  ngOnInit(): void {
    this.productService.productList().subscribe((result)=>{
      console.warn('mens',result);
      if(result){
        this.productList = result;
      }
    })
  }




 }
