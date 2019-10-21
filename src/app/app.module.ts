
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgDatepickerModule } from 'ng2-datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/utils/home/home.component';
import { LoginComponent } from './pages/utils/login/login.component';
import { SigninComponent } from './components/utils/signin/signin.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminlayoutComponent } from './pages/admin/adminlayout/adminlayout.component';
import { AdminHeaderComponent } from './components/header/admin-header/admin-header.component';
import { AdminSidebarComponent } from './components/sidebar/admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { FarmerLayoutComponent } from './pages/farmer/farmer-layout/farmer-layout.component';
import { FarmerHeaderComponent } from './components/header/farmer-header/farmer-header.component';
import { GuestHeaderComponent } from './components/header/guest-header/guest-header.component';
import { FarmerDashboardComponent } from './components/dashboard/farmer-dashboard/farmer-dashboard.component';
import { FarmerSidebarComponent } from './components/sidebar/farmer-sidebar/farmer-sidebar.component';
import { RegisterComponent } from './pages/distributor/register/register.component';
import { SignupComponent } from './components/utils/signup/signup.component';
import { FarmerRegisterComponent } from './pages/farmer/farmer-register/farmer-register.component';
import { FarmerSignupComponent } from './components/farmer/farmer-signup/farmer-signup.component';
import { OwlModule } from 'ngx-owl-carousel';
import { Body1Component } from './components/utils/body1/body1.component';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { AdminService } from './services/admin.service';
import { Body2Component } from './components/utils/body2/body2.component';
import { Body3Component } from './components/utils/body3/body3.component';
import { FooterComponent } from './components/utils/footer/footer.component';
import { Body4Component } from './components/utils/body4/body4.component';
import { BackgroundImageComponent } from './components/utils/background-image/background-image.component';

import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MainAdminComponent } from './pages/admin/main-admin/main-admin.component';
import { NotFoundComponent } from './components/utils/not-found/not-found.component';
import { AdminloginComponent } from './pages/admin/adminlogin/adminlogin.component';
import { AboutComponent } from './components/utils/about/about.component';
import { AboutLayoutComponent } from './pages/utils/about-layout/about-layout.component';
import { ContactLayoutComponent } from './pages/utils/contact-layout/contact-layout.component';
import { ContactComponent } from './components/utils/contact/contact.component';
import { TokenInterceptor } from './services/token-interceptor';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductComponent } from './components/product/product.component';
import { BlobHttpInterceptor } from './services/blob-interceptor';

import { SafeHtmlPipe } from './shared/safe-html.pipe';

import { SearchComponent } from './components/utils/search/search.component';
import { SearchLayoutComponent } from './pages/utils/search-layout/search-layout.component';
import { AdmintokenInterceptor } from './services/admintoken-interceptor.service';
import { ListUserComponent } from './pages/admin/list-user/list-user.component';
import { GetListuserComponent } from './components/admin/get-listuser/get-listuser.component';
import { ListProductComponent } from './pages/admin/list-product/list-product.component';
import { GetListproductComponent } from './components/admin/get-listproduct/get-listproduct.component';

import { ProductLayoutComponent } from './pages/utils/product-layout/product-layout.component';
import { ProductByCategoryComponent } from './components/utils/product-by-category/product-by-category.component';
import { ProductService } from './services/product.service';
import { MyCartComponent } from './components/distributor/my-cart/my-cart.component';
import { MyCartPageComponent } from './pages/distributor/my-cart-page/my-cart-page.component';
import { IntroducePageComponent } from './pages/utils/introduce-page/introduce-page.component';
import { IntroduceComponent } from './components/utils/introduce/introduce.component';
import { RequestPageComponent } from './pages/distributor/request-page/request-page.component';
import { RequestComponent } from './components/distributor/request/request.component';
import { CheckoutPageComponent } from './pages/distributor/checkout-page/checkout-page.component';
import { CheckoutComponent } from './components/distributor/checkout/checkout.component';
import { HistoryPageComponent } from './pages/distributor/history-page/history-page.component';
import { HistoryComponent } from './components/distributor/history/history.component';
import { ListHistoryComponent } from './pages/admin/list-history/list-history.component';
import { GetHistoryComponent } from './components/admin/get-history/get-history.component';
import { OrderPageComponent } from './pages/distributor/order-page/order-page.component';
import { GetOrderComponent } from './components/distributor/get-order/get-order.component';
import { ListOrderComponent } from './pages/farmer/list-order/list-order.component';
import { GetListorderComponent } from './components/farmer/get-listorder/get-listorder.component';

import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { AdminListorderComponent } from './pages/admin/admin-listorder/admin-listorder.component';
import { FarmerListproductComponent } from './pages/farmer/farmer-listproduct/farmer-listproduct.component';
import { FarmerListhistoryComponent } from './pages/farmer/farmer-listhistory/farmer-listhistory.component';
import { AdminOrderComponent } from './components/admin/admin-order/admin-order.component';
import { FarmerProductComponent } from './components/farmer/farmer-product/farmer-product.component';
import { FarmerHistoryComponent } from './components/farmer/farmer-history/farmer-history.component';
import { ProfileComponent } from './components/distributor/profile/profile.component';
import { ProfilePageComponent } from './pages/distributor/profile-page/profile-page.component';

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
    ConfirmationDialogComponent,
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
    RequestComponent,
    CheckoutPageComponent,
    CheckoutComponent,
    HistoryPageComponent,
    HistoryComponent,
    ListHistoryComponent,
    GetHistoryComponent,
    OrderPageComponent,
    GetOrderComponent,
    ListOrderComponent,
    GetListorderComponent,
    AdminListorderComponent,
    FarmerListproductComponent,
    FarmerListhistoryComponent,
    AdminOrderComponent,
    FarmerProductComponent,
    FarmerHistoryComponent,
    ProfileComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OwlModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgDatepickerModule,
    NgbModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AdmintokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BlobHttpInterceptor, multi: true },
      DataService, ProductService, AuthService, AdminService, ConfirmationDialogService],
  entryComponents: [ ConfirmationDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
