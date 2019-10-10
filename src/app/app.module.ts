
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminlayoutComponent } from './pages/adminlayout/adminlayout.component';
import { AdminHeaderComponent } from './components/header/admin-header/admin-header.component';
import { AdminSidebarComponent } from './components/sidebar/admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { FarmerLayoutComponent } from './pages/farmer-layout/farmer-layout.component';
import { FarmerHeaderComponent } from './components/header/farmer-header/farmer-header.component';
import { GuestHeaderComponent } from './components/header/guest-header/guest-header.component';
import { FarmerDashboardComponent } from './components/dashboard/farmer-dashboard/farmer-dashboard.component';
import { FarmerSidebarComponent } from './components/sidebar/farmer-sidebar/farmer-sidebar.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignupComponent } from './components/signup/signup.component';
import { FarmerRegisterComponent } from './pages/farmer-register/farmer-register.component';
import { FarmerSignupComponent } from './components/farmer-signup/farmer-signup.component';
import { OwlModule } from 'ngx-owl-carousel';
import { Body1Component } from './components/body1/body1.component';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { AdminService } from './services/admin.service';
import { Body2Component } from './components/body2/body2.component';
import { Body3Component } from './components/body3/body3.component';
import { FooterComponent } from './components/footer/footer.component';
import { Body4Component } from './components/body4/body4.component';
import { BackgroundImageComponent } from './components/background-image/background-image.component';

import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MainAdminComponent } from './pages/main-admin/main-admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { AboutComponent } from './components/about/about.component';
import { AboutLayoutComponent } from './pages/about-layout/about-layout.component';
import { ContactLayoutComponent } from './pages/contact-layout/contact-layout.component';
import { ContactComponent } from './components/contact/contact.component';
import { TokenInterceptor } from './services/token-interceptor';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductComponent } from './components/product/product.component';
import { BlobHttpInterceptor } from './services/blob-interceptor';

import { SafeHtmlPipe } from './shared/safe-html.pipe';

import { SearchComponent } from './components/search/search.component';
import { SearchLayoutComponent } from './pages/search-layout/search-layout.component';
import { AdmintokenInterceptor } from './services/admintoken-interceptor.service';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { GetListuserComponent } from './components/get-listuser/get-listuser.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { GetListproductComponent } from './components/get-listproduct/get-listproduct.component';

import { ProductLayoutComponent } from './pages/product-layout/product-layout.component';
import { ProductByCategoryComponent } from './components/product-by-category/product-by-category.component';
import { ProductService } from './services/product.service';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { MyCartPageComponent } from './pages/my-cart-page/my-cart-page.component';
import { IntroducePageComponent } from './pages/introduce-page/introduce-page.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { RequestPageComponent } from './pages/request-page/request-page.component';
import { RequestComponent } from './components/request/request.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    AdminLoginComponent,
    AdminlayoutComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminDashboardComponent,
    FarmerLayoutComponent,
    FarmerHeaderComponent,
    GuestHeaderComponent,
    FarmerDashboardComponent,
    FarmerSidebarComponent,
    RegisterComponent,
    SignupComponent,
    FarmerRegisterComponent,
    FarmerSignupComponent,
    Body1Component,
    Body2Component,
    Body3Component,
    FooterComponent,
    Body4Component,
    BackgroundImageComponent,
    MainLayoutComponent,
    MainAdminComponent,
    NotFoundComponent,
    AdminloginComponent,
    AboutComponent,
    AboutLayoutComponent,
    ContactLayoutComponent,
    ContactComponent,
    ProductPageComponent,
    ProductComponent,

    SafeHtmlPipe,

    SearchComponent,
    SearchLayoutComponent,
    ListUserComponent,
    GetListuserComponent,
    ListProductComponent,
    GetListproductComponent,

    ProductLayoutComponent,
    ProductByCategoryComponent,
    MyCartComponent,
    MyCartPageComponent,
    IntroducePageComponent,
    IntroduceComponent,
    RequestPageComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OwlModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AdmintokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BlobHttpInterceptor, multi: true },
      DataService, ProductService, AuthService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
