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
import { AdminCreateProductComponent } from './pages/admin/admin-create-product/admin-create-product.component';
import { FarmerCreateProductComponent } from './pages/farmer/farmer-create-product/farmer-create-product.component';
import { FarmerEditProductComponent } from './pages/farmer/farmer-edit-product/farmer-edit-product.component';
import { AdminSearchPageComponent } from './pages/admin/admin-search-page/admin-search-page.component';
import { EnterEmailPageComponent } from './pages/utils/enter-email-page/enter-email-page.component';
import { ByTypeLastestComponent } from './pages/utils/by-type-lastest/by-type-lastest.component';
import { ByTypePriceHighComponent } from './pages/utils/by-type-price-high/by-type-price-high.component';
import { ByTypePriceLowComponent } from './pages/utils/by-type-price-low/by-type-price-low.component';
import { AdminSearchUserComponent } from './pages/admin/admin-search-user/admin-search-user.component';
import { SupplierPageComponent } from './pages/utils/supplier-page/supplier-page.component';
import { FarmerInfoComponent } from './pages/farmer/farmer-info/farmer-info.component';
import { AdminTypePageComponent } from './pages/admin/admin-type-page/admin-type-page.component';
import { AdminCreateTypeComponent } from './pages/admin/admin-create-type/admin-create-type.component';
import { AdminEditTypeComponent } from './pages/admin/admin-edit-type/admin-edit-type.component';
import { ProductByTypeComponent } from './pages/admin/product-by-type/product-by-type.component';
import { NewPasswordPageComponent } from './pages/utils/new-password-page/new-password-page.component';
import { CheckemailPageComponent } from './pages/utils/checkemail-page/checkemail-page.component';
import { AdminGuard } from './services/admin.guard';
import { ReplyFeedbackComponent } from './pages/farmer/reply-feedback/reply-feedback.component';
import { AdminListReplyComponent } from './pages/admin/admin-list-reply/admin-list-reply.component';
import { FarmerListReplyComponent } from './pages/farmer/farmer-list-reply/farmer-list-reply.component';
import { ShipInfoPageComponent } from './pages/utils/ship-info-page/ship-info-page.component';
import { ExchangePageComponent } from './pages/utils/exchange-page/exchange-page.component';
import { PrivacyPageComponent } from './pages/utils/privacy-page/privacy-page.component';
import { AdminListDistributorComponent } from './pages/admin/admin-list-distributor/admin-list-distributor.component';
import { AdminListSupplierComponent } from './pages/admin/admin-list-supplier/admin-list-supplier.component';
import { FarmerRefusalReasonComponent } from './pages/farmer/farmer-refusal-reason/farmer-refusal-reason.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactLayoutComponent },
  { path: 'introduce', component: IntroducePageComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'type/:id', component: ProductLayoutComponent },
  { path: 'type/:id/lastest', component: ByTypeLastestComponent },
  { path: 'type/:id/price_low', component: ByTypePriceLowComponent },
  { path: 'type/:id/price_high', component: ByTypePriceHighComponent },
  { path: 'search', component: SearchLayoutComponent },
  { path: 'supplier/:id', component: SupplierPageComponent },
  { path: 'forgot-password', component: EnterEmailPageComponent },
  { path: 'change_password', component: NewPasswordPageComponent },
  { path: 'check-email', component: CheckemailPageComponent },
  { path: 'shipping-information', component: ShipInfoPageComponent },
  { path: 'return-exchange', component: ExchangePageComponent },
  { path: 'privacy-policy', component: PrivacyPageComponent },
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
      { path: 'get-list-type', component: AdminTypePageComponent },
      { path: 'get-history', component: ListHistoryComponent },
      { path: 'get-list-order', component: AdminListorderComponent },
      { path: 'get-list-comment', component: AdminListcommentComponent },
      { path: 'edit-product/:id', component: AdminEditProductComponent },
      { path: 'create-product', component: AdminCreateProductComponent },
      { path: 'searchpage', component: AdminSearchPageComponent },
      { path: 'user', component: AdminSearchUserComponent },
      { path: 'edit-type/:id', component: AdminEditTypeComponent },
      { path: 'create-type', component: AdminCreateTypeComponent },
      { path: 'product-by-type/:id', component: ProductByTypeComponent },
      { path: 'get-list-reply', component: AdminListReplyComponent },
      { path: 'get-list-supplier', component: AdminListSupplierComponent },
      { path: 'get-list-distributor', component: AdminListDistributorComponent }

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
      { path: 'get-listcomment', component: FarmerListcommentComponent },
      { path: 'post-product', component: FarmerCreateProductComponent },
      { path: 'update-product/:id', component: FarmerEditProductComponent },
      { path: 'info', component: FarmerInfoComponent },
      { path: 'reply-feedback/:id', component: ReplyFeedbackComponent },
      { path: 'get-listreply', component: FarmerListReplyComponent },
      { path: 'refusal-reason/:id', component: FarmerRefusalReasonComponent }
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
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'admin', component: AdminloginComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
