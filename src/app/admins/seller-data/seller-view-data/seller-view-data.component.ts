import { Component, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SellerProductsService } from 'src/app/Sellers/seller-service/seller-products.service';
import { sellerProduct } from 'src/app/data-type';

@Component({
  selector: 'app-seller-view-data',
  templateUrl: './seller-view-data.component.html',
  styleUrls: ['./seller-view-data.component.css']
})
export class SellerViewDataComponent implements OnInit{

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
