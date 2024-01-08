import { Component } from '@angular/core';
import { product } from 'src/app/data-type';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-womens-sarees',
  templateUrl: './womens-sarees.component.html',
  styleUrls: ['./womens-sarees.component.css']
})
export class WomensSareesComponent {
  productList: undefined | product[];
  
  constructor( private productService: ProductsService){
  }

  ngOnInit(): void {
    this.productService.productListWomensSarees().subscribe((result)=>{
      console.warn('mens',result);
      if(result){
        this.productList = result;
      }
    })
  }
}
