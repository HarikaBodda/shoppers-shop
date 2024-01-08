import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { cart, orderNow, product } from 'src/app/data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cartData = new EventEmitter<product[]|[]>()

  constructor(private http: HttpClient) { }

  //Mens Categories
  productList(){
    return this.http.get<product[]>('http://localhost:3000/mens-jackets');
  }

  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/mens-jackets/${id}`);
  }

  productListMensJeans(){
    return this.http.get<product[]>('http://localhost:3000/mens-jeans');
  }

  getProductMensJean(id:string){
    return this.http.get<product>(`http://localhost:3000/mens-jeans/${id}`);
  }

  productListMensShirts(){
    return this.http.get<product[]>('http://localhost:3000/mens-shirts');
  }

  getProductMensShirts(id:string){
    return this.http.get<product>(`http://localhost:3000/mens-shirts/${id}`);
  }

  productListMensTshirts(){
    return this.http.get<product[]>('http://localhost:3000/mens-tshirts');
  }

  getProductMensTshirt(id:string){
    return this.http.get<product>(`http://localhost:3000/mens-tshirts/${id}`);
  }


  //Womens-Categories
  productListWomensJackets(){
    return this.http.get<product[]>('http://localhost:3000/womens-jackets');
  }

  getProductWomensJacket(id:string){
    return this.http.get<product>(`http://localhost:3000/womens-jackets/${id}`);
  }

  productListWomensJeans(){
    return this.http.get<product[]>('http://localhost:3000/womens-jeans');
  }
  
  getProductWomensJeans(id:string){
    return this.http.get<product>(`http://localhost:3000/womens-jeans/${id}`);
  }
  productListWomensTops(){
    return this.http.get<product[]>('http://localhost:3000/womens-tops');
  }
  
  getProductWomensTops(id:string){
    return this.http.get<product>(`http://localhost:3000/womens-tops/${id}`);
  }
  productListWomensSarees(){
    return this.http.get<product[]>('http://localhost:3000/womens-sarees');
  }
  
  getProductWomensSarees(id:string){
    return this.http.get<product>(`http://localhost:3000/womens-sarees/${id}`);
  }

  localAddToCart(data: product){
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if(!localCart){
      localStorage.setItem('localCart', JSON.stringify([data]));
    }else{
      console.warn("You already have data")
      // cartData = JSON.parse(localCart);
      // cartData.push(data);
      // localStorage.setItem('localCart', JSON.stringify(cartData));
      // this.cartData.emit(cartData);
    }
  }

  laddToCart(data: product){
    let cartData = [];
    let localCart = localStorage.getItem('localCart'); 
    if(!localCart){
      localStorage.setItem('localCart', JSON.stringify([data]))
      this.cartData.emit([data]);

    }else{
      console.warn("you already have data")
      cartData = JSON.parse(localCart)
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData)); 
      this.cartData.emit(cartData);

    }
  }

  removeItems(productId:number){
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      let items:product[] = JSON.parse(cartData);
      items = items.filter((item: product)=>productId!== item.id)
      localStorage.setItem('localCart', JSON.stringify(items))
      this.cartData.emit(items)
    }
  }

  addToCart(cartData:cart){
    return this.http.post('http://localhost:3000/cart', cartData);
  }

  getCartList(userId: number) {
    return this.http
      .get<product[]>('http://localhost:3000/cart?userId=' + userId, {
        observe: 'response',
      })
      .subscribe((result) => {
        if (result && result.body) {
          this.cartData.emit(result.body);
        }
      });
  }

  removeToCart(cardId: number){
    return this.http.delete('http://localhost:3000/cart/'+ cardId);

  }

  currentCart() {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<cart[]>('http://localhost:3000/cart?userId=' + userData.id);
  }

  orderNow(data:orderNow){
    return this.http.post('http://localhost:3000/orders',data);
  }

  orderList(){
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<orderNow[]>('http://localhost:3000/orders?userId=' + userData.id)
  }

  deleteProduct(id: number){
    return this.http.delete(`http://localhost:3000/cart/${id}`)
  }

  productsList(){
    return this.http.get<cart[]>('http://localhost:3000/cart')
  }

}
