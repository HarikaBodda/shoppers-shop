import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { OrderDetailsComponent } from './cart/order-details/order-details.component';
import { WishlistComponent } from './cart/wishlist/wishlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddAddressComponent } from './dashboard/add-address/add-address.component';
import { AddressBookComponent } from './dashboard/address-book/address-book.component';
import { EditAddressComponent } from './dashboard/edit-address/edit-address.component';
import { EditProfileComponent } from './dashboard/edit-profile/edit-profile.component';
import { MyOrdersComponent } from './dashboard/my-orders/my-orders.component';
import { MyProfileComponent } from './dashboard/my-profile/my-profile.component';
import { PaymentOptionsComponent } from './dashboard/payment-options/payment-options.component';
import { ReturnCancellationsComponent } from './dashboard/return-cancellations/return-cancellations.component';
import { TrackOrderComponent } from './dashboard/track-order/track-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginAgentComponent } from './login-agent/login-agent.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products/Mens/mens-jackets/products-details/products-details.component';
import { RegisterAgentComponent } from './register-agent/register-agent.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { VendorRegisterComponent } from './vendor-register/vendor-register.component';
import { MensJacketsComponent } from './products/Mens/mens-jackets/mens-jackets.component';
import { MensJeansComponent } from './products/Mens/mens-jeans/mens-jeans.component';
import { MensShirtsComponent } from './products/Mens/mens-shirts/mens-shirts.component';
import { MensTshirtsComponent } from './products/Mens/mens-tshirts/mens-tshirts.component';
import { WomensJacketsComponent } from './products/Womens/womens-jackets/womens-jackets.component';
import { WomensJeansComponent } from './products/Womens/womens-jeans/womens-jeans.component';
import { WomensSareesComponent } from './products/Womens/womens-sarees/womens-sarees.component';
import { WomensTopsComponent } from './products/Womens/womens-tops/womens-tops.component';
import { WomensJacketProductDetailsComponent } from './products/Womens/womens-jackets/womens-jacket-product-details/womens-jacket-product-details.component';
import { WomensJeansProductDetailsComponent } from './products/Womens/womens-jeans/womens-jeans-product-details/womens-jeans-product-details.component';
import { WomensSareesProductDetailsComponent } from './products/Womens/womens-sarees/womens-sarees-product-details/womens-sarees-product-details.component';
import { WomensTopsProductDetailsComponent } from './products/Womens/womens-tops/womens-tops-product-details/womens-tops-product-details.component';
import { MensShirtsProductDetailsComponent } from './products/Mens/mens-shirts/mens-shirts-product-details/mens-shirts-product-details.component';
import { MensTShirtsProductDetailsComponent } from './products/Mens/mens-tshirts/mens-tshirts-product-details/mens-tshirts-product-details.component';
import { MensJeansProductDetailsComponent } from './products/Mens/mens-jeans/mens-jeans-product-details/mens-jeans-product-details.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demo2/demo2.component';
import { AgentLoginSignupComponent } from './agent-login-signup/agent-login-signup.component';
import { SellerComponent } from './Sellers/seller/seller.component';
import { SellerHomeComponent } from './Sellers/seller-home/seller-home.component';
import { SellerAddProductComponent } from './Sellers/seller-add-product/seller-add-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SellerUpdateProductComponent } from './Sellers/seller-update-product/seller-update-product.component';
import { UserComponent } from './users/user/user.component';
import { AdminComponent } from './admins/admin/admin.component';
import { UserDataComponent } from './admins/user-data/user-data.component';
import { SellerDataComponent } from './admins/seller-data/seller-data.component';
import { SellerViewDataComponent } from './admins/seller-data/seller-view-data/seller-view-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent,
    OrderDetailsComponent,
    WishlistComponent,
    DashboardComponent,
    AddAddressComponent,
    AddressBookComponent,
    EditAddressComponent,
    EditProfileComponent,
    MyOrdersComponent,
    MyProfileComponent,
    PaymentOptionsComponent,
    ReturnCancellationsComponent,
    TrackOrderComponent,
    DemoComponent,
    Demo1Component,
    FooterComponent,
    HomeComponent,
    LoginAgentComponent,
    NavComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    RegisterAgentComponent,
    TopBannerComponent,
    VendorLoginComponent,
    VendorRegisterComponent,
    MensJacketsComponent,
    MensJeansComponent,
    MensShirtsComponent,
    MensTshirtsComponent,
    WomensJacketsComponent,
    WomensJeansComponent,
    WomensSareesComponent,
    WomensTopsComponent,
    WomensJacketProductDetailsComponent,
    WomensJeansProductDetailsComponent,
    WomensSareesProductDetailsComponent,
    WomensTopsProductDetailsComponent,
    MensShirtsProductDetailsComponent,
    MensTShirtsProductDetailsComponent,
    MensJeansProductDetailsComponent,
    Demo2Component,
    AgentLoginSignupComponent,
    SellerComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    SellerUpdateProductComponent,
    UserComponent,
    AdminComponent,
    UserDataComponent,
    SellerDataComponent,
    SellerViewDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // CarouselModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
