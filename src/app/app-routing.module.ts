import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminlayoutComponent } from './pages/adminlayout/adminlayout.component';
import { FarmerLayoutComponent } from './pages/farmer-layout/farmer-layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { FarmerRegisterComponent } from './pages/farmer-register/farmer-register.component';
import { AdminService } from './services/admin.service';

import { AuthService } from './services/auth.service';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MainAdminComponent } from './pages/main-admin/main-admin.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { FarmerService } from './services/farmer.service';
import { AboutLayoutComponent } from './pages/about-layout/about-layout.component';
import { ContactLayoutComponent } from './pages/contact-layout/contact-layout.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SearchLayoutComponent } from './pages/search-layout/search-layout.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { ProductLayoutComponent } from './pages/product-layout/product-layout.component';
import { MyCartPageComponent } from './pages/my-cart-page/my-cart-page.component';
import { IntroducePageComponent } from './pages/introduce-page/introduce-page.component';
import { RequestPageComponent } from './pages/request-page/request-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { ListHistoryComponent } from './pages/list-history/list-history.component';

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
      { path: 'order', component: RequestPageComponent }

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
      { path: 'get-history', component: ListHistoryComponent }

    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [FarmerService],

    children: [
      { path: 'myaccount', component: FarmerLayoutComponent },

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
