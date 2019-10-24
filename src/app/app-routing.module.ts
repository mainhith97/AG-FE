import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './pages/utils/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/utils/home/home.component';
import { AdminlayoutComponent } from './pages/admin/adminlayout/adminlayout.component';
import { FarmerLayoutComponent } from './pages/farmer/farmer-layout/farmer-layout.component';
import { RegisterComponent } from './pages/distributor/register/register.component';
import { FarmerRegisterComponent } from './pages/farmer/farmer-register/farmer-register.component';
import { AdminService } from './services/admin.service';

import { AuthService } from './services/auth.service';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MainAdminComponent } from './pages/admin/main-admin/main-admin.component';

import { NotFoundComponent } from './components/utils/not-found/not-found.component';
import { AdminloginComponent } from './pages/admin/adminlogin/adminlogin.component';
import { FarmerService } from './services/farmer.service';
import { ContactLayoutComponent } from './pages/utils/contact-layout/contact-layout.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SearchLayoutComponent } from './pages/utils/search-layout/search-layout.component';
import { ListUserComponent } from './pages/admin/list-user/list-user.component';
import { ListProductComponent } from './pages/admin/list-product/list-product.component';
import { ProductLayoutComponent } from './pages/utils/product-layout/product-layout.component';
import { MyCartPageComponent } from './pages/distributor/my-cart-page/my-cart-page.component';
import { IntroducePageComponent } from './pages/utils/introduce-page/introduce-page.component';
import { RequestPageComponent } from './pages/distributor/request-page/request-page.component';
import { CheckoutPageComponent } from './pages/distributor/checkout-page/checkout-page.component';
import { HistoryPageComponent } from './pages/distributor/history-page/history-page.component';
import { ListHistoryComponent } from './pages/admin/list-history/list-history.component';
import { OrderPageComponent } from './pages/distributor/order-page/order-page.component';
import { ListOrderComponent } from './pages/farmer/list-order/list-order.component';
import { AdminListorderComponent } from './pages/admin/admin-listorder/admin-listorder.component';
import { FarmerListproductComponent } from './pages/farmer/farmer-listproduct/farmer-listproduct.component';
import { FarmerListhistoryComponent } from './pages/farmer/farmer-listhistory/farmer-listhistory.component';
import { ProfilePageComponent } from './pages/distributor/profile-page/profile-page.component';
import { AdminListcommentComponent } from './pages/admin/admin-listcomment/admin-listcomment.component';
import { FarmerListcommentComponent } from './pages/farmer/farmer-listcomment/farmer-listcomment.component';
import { AdminEditProductComponent } from './pages/admin/admin-edit-product/admin-edit-product.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactLayoutComponent },
  { path: 'introduce', component: IntroducePageComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'type/:id', component: ProductLayoutComponent },
  { path: 'search', component: SearchLayoutComponent },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthService],
    children: [

      { path: 'my-cart', component: MyCartPageComponent },
      { path: 'checkout', component: CheckoutPageComponent },
      { path: 'history', component: HistoryPageComponent },
      { path: 'order/:id', component: RequestPageComponent },
      { path: 'list-order', component: OrderPageComponent },
      { path: 'profile', component: ProfilePageComponent }
    ]
  },
  {
    path: '',
    component: MainAdminComponent,
    canActivate: [AdminService],

    children: [
      { path: 'main', component: AdminlayoutComponent },
      { path: 'get-list-user', component: ListUserComponent },
      { path: 'get-list-product', component: ListProductComponent },
      { path: 'get-history', component: ListHistoryComponent },
      { path: 'get-list-order', component: AdminListorderComponent },
      { path: 'get-list-comment', component: AdminListcommentComponent },
      { path: 'edit-product/:id', component: AdminEditProductComponent }

    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [FarmerService],

    children: [
      { path: 'myaccount', component: FarmerLayoutComponent },
      { path: 'get-listorder', component: ListOrderComponent },
      { path: 'get-listproduct', component: FarmerListproductComponent },
      { path: 'get-listhistory', component: FarmerListhistoryComponent },
      { path: 'get-listcomment', component: FarmerListcommentComponent }

    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [

      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'farmer_register', component: FarmerRegisterComponent },

    ]
  },
  // { path: 'login', component: LoginComponent },
  // { path: 'register',  component: RegisterComponent },
  // { path: 'farmer_register',  component: FarmerRegisterComponent },
  { path: 'admin', component: AdminloginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
