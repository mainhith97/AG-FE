
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgDatepickerModule } from 'ng2-datepicker';
import { ToastrModule } from 'ngx-toastr';
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

import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductComponent } from './components/product/product.component';

import { SafeHtmlPipe } from './shared/safe-html.pipe';

import { SearchComponent } from './components/utils/search/search.component';
import { SearchLayoutComponent } from './pages/utils/search-layout/search-layout.component';

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
import { AdminListcommentComponent } from './pages/admin/admin-listcomment/admin-listcomment.component';
import { AdminCommentComponent } from './components/admin/admin-comment/admin-comment.component';
import { FarmerListcommentComponent } from './pages/farmer/farmer-listcomment/farmer-listcomment.component';
import { FarmerCommentComponent } from './components/farmer/farmer-comment/farmer-comment.component';
import { AdminCreateproductComponent } from './components/admin/admin-createproduct/admin-createproduct.component';
import { AdminEditproductComponent } from './components/admin/admin-editproduct/admin-editproduct.component';
import { AdminEditProductComponent } from './pages/admin/admin-edit-product/admin-edit-product.component';
import { AdminCreateProductComponent } from './pages/admin/admin-create-product/admin-create-product.component';
import { FarmerCreateproductComponent } from './components/farmer/farmer-createproduct/farmer-createproduct.component';
import { FarmerEditproductComponent } from './components/farmer/farmer-editproduct/farmer-editproduct.component';
import { FarmerCreateProductComponent } from './pages/farmer/farmer-create-product/farmer-create-product.component';
import { FarmerEditProductComponent } from './pages/farmer/farmer-edit-product/farmer-edit-product.component';
import { AdminSearchPageComponent } from './pages/admin/admin-search-page/admin-search-page.component';
import { AdminSearchComponent } from './components/admin/admin-search/admin-search.component';
import { EnterEmailComponent } from './components/utils/enter-email/enter-email.component';
import { NewPasswordComponent } from './components/utils/new-password/new-password.component';
import { EnterEmailPageComponent } from './pages/utils/enter-email-page/enter-email-page.component';
import { NewPasswordPageComponent } from './pages/utils/new-password-page/new-password-page.component';
import { ByTypelastestComponent } from './components/utils/by-typelastest/by-typelastest.component';
import { ByTypeLastestComponent } from './pages/utils/by-type-lastest/by-type-lastest.component';
import { ByTypePricelowComponent } from './components/utils/by-type-pricelow/by-type-pricelow.component';
import { ByTypePricehighComponent } from './components/utils/by-type-pricehigh/by-type-pricehigh.component';
import { ByTypePriceLowComponent } from './pages/utils/by-type-price-low/by-type-price-low.component';
import { ByTypePriceHighComponent } from './pages/utils/by-type-price-high/by-type-price-high.component';
import { SupplierPageComponent } from './pages/utils/supplier-page/supplier-page.component';
import { SupplierpageComponent } from './components/utils/supplierpage/supplierpage.component';
import { AdminSearchUserComponent } from './pages/admin/admin-search-user/admin-search-user.component';
import { AdminSearchuserComponent } from './components/admin/admin-searchuser/admin-searchuser.component';
import { FarmerInfoComponent } from './pages/farmer/farmer-info/farmer-info.component';
import { FarmerinfoComponent } from './components/farmer/farmerinfo/farmerinfo.component';
import { AdminTypeComponent } from './components/admin/admin-type/admin-type.component';
import { AdminTypePageComponent } from './pages/admin/admin-type-page/admin-type-page.component';
import { AdminCreatetypeComponent } from './components/admin/admin-createtype/admin-createtype.component';
import { AdminEdittypeComponent } from './components/admin/admin-edittype/admin-edittype.component';
import { AdminCreateTypeComponent } from './pages/admin/admin-create-type/admin-create-type.component';
import { AdminEditTypeComponent } from './pages/admin/admin-edit-type/admin-edit-type.component';
import { ProductBytypeComponent } from './components/admin/product-bytype/product-bytype.component';
import { ProductByTypeComponent } from './pages/admin/product-by-type/product-by-type.component';
import { CheckemailComponent } from './components/utils/checkemail/checkemail.component';
import { CheckemailPageComponent } from './pages/utils/checkemail-page/checkemail-page.component';
import { FarmerReplyComponent } from './components/farmer/farmer-reply/farmer-reply.component';
import { ReplyFeedbackComponent } from './pages/farmer/reply-feedback/reply-feedback.component';
import { FarmerListreplyComponent } from './components/farmer/farmer-listreply/farmer-listreply.component';
import { FarmerListReplyComponent } from './pages/farmer/farmer-list-reply/farmer-list-reply.component';
import { AdminListreplyComponent } from './components/admin/admin-listreply/admin-listreply.component';
import { AdminListReplyComponent } from './pages/admin/admin-list-reply/admin-list-reply.component';


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
    ProfilePageComponent,
    AdminListcommentComponent,
    AdminCommentComponent,
    FarmerListcommentComponent,
    FarmerCommentComponent,
    AdminCreateproductComponent,
    AdminEditproductComponent,
    AdminEditProductComponent,
    AdminCreateProductComponent,
    FarmerCreateproductComponent,
    FarmerEditproductComponent,
    FarmerCreateProductComponent,
    FarmerEditProductComponent,
    AdminSearchPageComponent,
    AdminSearchComponent,
    EnterEmailComponent,
    NewPasswordComponent,
    EnterEmailPageComponent,
    NewPasswordPageComponent,
    ByTypelastestComponent,
    ByTypeLastestComponent,
    ByTypePricelowComponent,
    ByTypePricehighComponent,
    ByTypePriceLowComponent,
    ByTypePriceHighComponent,
    SupplierPageComponent,
    SupplierpageComponent,
    AdminSearchUserComponent,
    AdminSearchuserComponent,
    FarmerInfoComponent,
    FarmerinfoComponent,
    AdminTypeComponent,
    AdminTypePageComponent,
    AdminCreatetypeComponent,
    AdminEdittypeComponent,
    AdminCreateTypeComponent,
    AdminEditTypeComponent,
    ProductBytypeComponent,
    ProductByTypeComponent,
    CheckemailComponent,
    CheckemailPageComponent,
    FarmerReplyComponent,
    ReplyFeedbackComponent,
    FarmerListreplyComponent,
    FarmerListReplyComponent,
    AdminListreplyComponent,
    AdminListReplyComponent
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
    NgbModule,
    ToastrModule.forRoot(),

  ],
  providers: [
  DataService, ProductService, AuthService, AdminService, ConfirmationDialogService],
  entryComponents: [ ConfirmationDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
