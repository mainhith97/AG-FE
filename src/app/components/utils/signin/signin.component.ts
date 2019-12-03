import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/shared/interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  res: any;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: DataService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // check localstorage
  readLocalStorageValue(key: string) {
    return localStorage.getItem(key);
  }
  submit({ value }: { value: ILogin }) {
    return this.loginService.postLogin2(value).subscribe(res => {
      this.res = res;
      if (this.res.success && this.res.role === 'distributor') {

        localStorage.setItem('userToken', this.res.result);
        localStorage.setItem('id', this.res.id);
        localStorage.setItem('username', this.res.username);
        // tslint:disable-next-line: radix
        localStorage.setItem('giohang', this.res.cart);
        this.router.navigate([this.readLocalStorageValue('link')]);
        // this.router.navigate(['home']);

      } else if (this.res.success && this.res.role === 'farmer') {

        localStorage.setItem('farmerToken', this.res.result);
        localStorage.setItem('id', this.res.id);
        localStorage.setItem('username', this.res.username);
        this.router.navigate(['myaccount']);
      }
    }, error => {
      console.log(error);
      this.toastr.error(error);
    });
  }
}


