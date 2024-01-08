import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  title = 'angular16';
  //Sidebar toggle show hide function
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
  data:any;
  constructor(private http: HttpClient, private adminService: AdminService){
  //get request from web api
   
  }

  ngOnInit(): void {
    // this.adminService.getData().subscribe((data) => {
    //   this.data = data;
    // }, error => console.error(error));

    this.adminService.getData().subscribe((result)=>{
      this.data = result
      console.log(this.data)
    })
  }



}
