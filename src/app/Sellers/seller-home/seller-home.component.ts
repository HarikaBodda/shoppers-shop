import { Component, OnInit } from '@angular/core';
import { SellerProductsService } from '../seller-service/seller-products.service';
import { product, sellerProduct } from 'src/app/data-type';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | sellerProduct[];
  productDeleteMessage: undefined | string;
  faTrash = faTrash;
  faEdit = faEdit;

  constructor(private sellerProducts: SellerProductsService) { }

  ngOnInit(): void {
    this.updatedList();
  }

  deleteProduct(id: number) {
    console.warn(id);
    this.sellerProducts.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productDeleteMessage = " Product is deleted";
        this.updatedList();

      }
    })
    setTimeout(() => {
      this.productDeleteMessage = undefined;
    }, 3000)
  }

  updatedList() {
    this.sellerProducts.productList().subscribe((result) => {
      console.warn(result);
      if (result) {
        this.productList = result;
      }
    })
  }

}
