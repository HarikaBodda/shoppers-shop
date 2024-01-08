import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product, sellerProduct } from 'src/app/data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerProductsService {
  addProductMessage: string|undefined;
  url = 'http://localhost:3000/sellersProducts'

  constructor(private http: HttpClient) { }
  addProduct(data: sellerProduct) {
    return this.http.post(this.url, data);
  }

  productList(){
    return this.http.get<sellerProduct[]>(this.url)
  }

  deleteProduct(id: number){
    return this.http.delete(`http://localhost:3000/sellersProducts/${id}`)
  }

  getProduct(id:string){
    return this.http.get<sellerProduct>(`http://localhost:3000/sellersProducts/${id}`);
  }

  updateProduct(product: sellerProduct){
    return this.http.put<sellerProduct>(`http://localhost:3000/sellersProducts/${product.id}`, product);
  }

  changeFile(file:any){
    return this.http.post('http://localhost:3000/uploadFile', file)
  }
}
