import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {

  constructor(private http: HttpClient){}

  getFile(){
    this.http.get('http://localhost:3000/uploadFile').subscribe((res)=>{
      console.log(res)
    })
  }
}
