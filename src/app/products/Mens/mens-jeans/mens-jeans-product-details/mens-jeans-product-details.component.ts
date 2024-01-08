import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timeInterval } from 'rxjs';
import { cart, product } from 'src/app/data-type';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-mens-jeans-product-details',
  templateUrl: './mens-jeans-product-details.component.html',
  styleUrls: ['./mens-jeans-product-details.component.css']
})
export class MensJeansProductDetailsComponent {
  productData: undefined | product;
  productQuantity: number = 1;
  removeCart = false;
  cartData: product | undefined;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    let productId = this.activateRoute.snapshot.paramMap.get('productId');
    console.warn(productId);

    productId && this.productService.getProductMensJean(productId).subscribe((result) => {
      console.warn(result);
      this.productData = result;
      let cartData = localStorage.getItem('localCart');
      if (productId && cartData) {
        let items = JSON.parse(cartData);
        items = items.filter((item: product) => productId === item.id.toString())
        console.warn("items", items);
        if (items.length) {
          this.removeCart = true;
        } else {
          this.removeCart = false
        }
      }
      let user = localStorage.getItem('user');
      if (user) {
        let userId = user && JSON.parse(user).id;
        // let obj = userid.find((o: { id: any; }) => { return o.id });
        // let userId = obj.id;
        this.productService.getCartList(userId);

        this.productService.cartData.subscribe((res) => {
          let item = res.filter((item: product) => {
            productId?.toString() === item.productId?.toString()
          })
          if (item.length) {
            this.cartData = item[0]
            this.removeCart = true
          }
        })
      }

    })
  }

  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity += 1
    } else if (this.productQuantity > 1 && val === 'minus') {
      this.productQuantity -= 1
    }
  }

  addToCart() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;
      if (!localStorage.getItem('user')) {
        this.productService.laddToCart(this.productData)
        this.removeCart = true;
      } else {
        console.warn("user is logged in");
        let user = localStorage.getItem('user');
        let userId = user && JSON.parse(user).id;
        // console.log(userid);
        // let obj = userid.find((o: { id: any; }) => { return o.id });
        // let userId = obj.id
        console.log(userId);

        let cartData: cart = {
          ...this.productData,
          productId: this.productData.id,
          userId
        }
        //delete cartData.id;
        this.productService.addToCart(cartData).subscribe((result) => {
          if (result) {
            this.productService.getCartList(userId);
            this.removeCart = true;
          }
        })




      }
    }
  }

  removeToCart(productId: number) {
    if (!localStorage.getItem('user')) {
      this.productService.removeItems(productId);
    } else {
      console.warn(this.cartData);

      this.cartData && this.productService.removeToCart(this.cartData.id)
        .subscribe((result) => {
          let user = localStorage.getItem('user');
          let userId = user && JSON.parse(user).id;
          // let obj = userid.find((o: { id: any; }) => { return o.id });
          // let userId = obj.id
          this.productService.getCartList(userId)
        })
    }
    this.removeCart = false;

  }

}
