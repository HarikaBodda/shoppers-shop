import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
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
import { TopBannerComponent } from './top-banner/top-banner.component';
import { WomensTopsComponent } from './products/Womens/womens-tops/womens-tops.component';
import { WomensSareesComponent } from './products/Womens/womens-sarees/womens-sarees.component';
import { WomensJacketsComponent } from './products/Womens/womens-jackets/womens-jackets.component';
import { WomensJeansComponent } from './products/Womens/womens-jeans/womens-jeans.component';
import { MensShirtsComponent } from './products/Mens/mens-shirts/mens-shirts.component';
import { MensTshirtsComponent } from './products/Mens/mens-tshirts/mens-tshirts.component';
import { MensJacketsComponent } from './products/Mens/mens-jackets/mens-jackets.component';
import { MensJeansComponent } from './products/Mens/mens-jeans/mens-jeans.component';
import { OrderDetailsComponent } from './cart/order-details/order-details.component';
import { ProductsDetailsComponent } from './products/Mens/mens-jackets/products-details/products-details.component';
import { WomensJacketProductDetailsComponent } from './products/Womens/womens-jackets/womens-jacket-product-details/womens-jacket-product-details.component';
import { AuthGuard } from './auth.guard';
import { SellerComponent } from './Sellers/seller/seller.component';
import { SellerHomeComponent } from './Sellers/seller-home/seller-home.component';
import { SellerAddProductComponent } from './Sellers/seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './Sellers/seller-update-product/seller-update-product.component';
import { MensJeansProductDetailsComponent } from './products/Mens/mens-jeans/mens-jeans-product-details/mens-jeans-product-details.component';
import { MensTShirtsProductDetailsComponent } from './products/Mens/mens-tshirts/mens-tshirts-product-details/mens-tshirts-product-details.component';
import { MensShirtsProductDetailsComponent } from './products/Mens/mens-shirts/mens-shirts-product-details/mens-shirts-product-details.component';
import { UserComponent } from './users/user/user.component';
import { WomensTopsProductDetailsComponent } from './products/Womens/womens-tops/womens-tops-product-details/womens-tops-product-details.component';
import { WomensJeansProductDetailsComponent } from './products/Womens/womens-jeans/womens-jeans-product-details/womens-jeans-product-details.component';
import { WomensSareesProductDetailsComponent } from './products/Womens/womens-sarees/womens-sarees-product-details/womens-sarees-product-details.component';
import { AdminComponent } from './admins/admin/admin.component';
import { UserDataComponent } from './admins/user-data/user-data.component';
import { SellerDataComponent } from './admins/seller-data/seller-data.component';
import { SellerViewDataComponent } from './admins/seller-data/seller-view-data/seller-view-data.component';

const routes: Routes = [
  {path:'cart', component: CartComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'wishlist', component: WishlistComponent},
  {path:'home', component: TopBannerComponent},
  {path:'', component: TopBannerComponent},


  {path:'womens-tops', component:WomensTopsComponent},
  {path:'womens-sarees', component:WomensSareesComponent},
  {path:'womens-jackets', component:WomensJacketsComponent},
  {path:'womens-jeans', component:WomensJeansComponent},

  {path:'mens-shirts', component:MensShirtsComponent},
  {path:'mens-tshirts', component: MensTshirtsComponent},
  {path:'mens-jackets', component:MensJacketsComponent},
  {path:'mens-jeans', component: MensJeansComponent},

  {path:'dashboard', component: DashboardComponent},
  {path:'add-address', component: AddAddressComponent},
  {path:'address-book', component: AddressBookComponent},
  {path:'edit-address', component: EditAddressComponent},
  {path:'edit-profile', component: EditProfileComponent},
  {path:'my-orders', component: MyOrdersComponent},
  {path:'my-profile', component: MyProfileComponent},
  {path:'payment-options', component: PaymentOptionsComponent},
  {path:'returns-cancellations', component: ReturnCancellationsComponent},
  {path:'track-order', component: TrackOrderComponent},
  {path:'order-details', component: OrderDetailsComponent},

  {path:'womensJacket-productDetails/:productId', component: WomensJacketProductDetailsComponent},
  {path:'womensJeans-productDetails/:productId', component: WomensJeansProductDetailsComponent},
  {path:'womensTops-productDetails/:productId', component: WomensTopsProductDetailsComponent},
  {path:'womensSarees-productDetails/:productId', component: WomensSareesProductDetailsComponent},

  {path:'mensJackets-productDetails/:productId', component: ProductsDetailsComponent},
  {path:'mensShirts-productDetails/:productId', component: MensShirtsProductDetailsComponent},
  {path:'mensTshirts-productDetails/:productId', component: MensTShirtsProductDetailsComponent},
  {path:'mensJeans-productDetails/:productId', component: MensJeansProductDetailsComponent},

  {path:'seller', component: SellerComponent},
  {path:'seller-home', component: SellerHomeComponent, canActivate: [AuthGuard]},
  {path:'seller-add-product', component: SellerAddProductComponent, canActivate: [AuthGuard]},
  {path:'seller-update-product/:id', component: SellerUpdateProductComponent, canActivate: [AuthGuard]},

  {path:'user', component: UserComponent},
  {path:'admin', component: AdminComponent},
  {path:'user-data', component: UserDataComponent},
  {path:'seller-data', component: SellerDataComponent},
  {path:'seller-view-data', component: SellerViewDataComponent},










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
