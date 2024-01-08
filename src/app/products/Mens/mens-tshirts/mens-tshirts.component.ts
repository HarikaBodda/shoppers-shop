import { Component } from '@angular/core';
import { product } from 'src/app/data-type';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-mens-tshirts',
  templateUrl: './mens-tshirts.component.html',
  styleUrls: ['./mens-tshirts.component.css']
})
export class MensTshirtsComponent {
  productList: undefined | product[];

  constructor( private productService: ProductsService){
  }

  ngOnInit(): void {
    this.productService.productListMensTshirts().subscribe((result)=>{
      console.warn('mens',result);
      if(result){
        this.productList = result;
      }
    })
  }


}
