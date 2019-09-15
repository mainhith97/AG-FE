import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
import { DistributorHeaderComponent } from './components/header/distributor-header/distributor-header.component';
import { FarmerDashboardComponent } from './components/dashboard/farmer-dashboard/farmer-dashboard.component';
import { FarmerSidebarComponent } from './components/sidebar/farmer-sidebar/farmer-sidebar.component';
import { DistributorLayoutComponent } from './pages/distributor-layout/distributor-layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignupComponent } from './components/signup/signup.component';
import { FarmerRegisterComponent } from './pages/farmer-register/farmer-register.component';
import { FarmerSignupComponent } from './components/farmer-signup/farmer-signup.component';
import { OwlModule } from 'ngx-owl-carousel';
import { Body1Component } from './components/body1/body1.component';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { AdminService } from './services/admin.service';

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
    DistributorHeaderComponent,
    FarmerDashboardComponent,
    FarmerSidebarComponent,
    DistributorLayoutComponent,
    RegisterComponent,
    SignupComponent,
    FarmerRegisterComponent,
    FarmerSignupComponent,
    Body1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OwlModule
  ],
  providers: [DataService, AuthService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
