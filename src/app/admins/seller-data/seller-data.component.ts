import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { SignUp } from 'src/app/data-type';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-data',
  templateUrl: './seller-data.component.html',
  styleUrls: ['./seller-data.component.css']
})
export class SellerDataComponent implements OnInit {

  productList: undefined | SignUp[];
  productDeleteMessage: undefined | string;
  faTrash = faTrash;
  faEdit = faEdit;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getData().subscribe((result) => {
      console.warn('sellers', result);
      if (result) {
        this.productList = result;
      }
    })
  }

  deleteProduct(id: number) {
    console.warn(id);
    this.adminService.deleteProduct(id).subscribe((result) => {
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
    this.adminService.getData().subscribe((result) => {
      console.warn(result);
      if (result) {
        this.productList = result;
      }
    })
  }

}


