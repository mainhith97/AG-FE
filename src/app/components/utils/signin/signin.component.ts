import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/shared/interface';
import { UserService } from 'src/app/services/user.service';

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
    private router: Router
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
  submit({ value }: { value: ILogin }) {
    return this.loginService.postLogin2(value).subscribe(res => {
      this.res = res;
      if (this.res.success && this.res.role === 'distributor') {

        localStorage.setItem('userToken', this.res.result);
        localStorage.setItem('id', this.res.id);
        // tslint:disable-next-line: radix
        localStorage.setItem('giohang', this.res.cart);
        this.router.navigate(['home']);

      } else if (this.res.success && this.res.role === 'farmer') {

        localStorage.setItem('farmerToken', this.res.result);
        localStorage.setItem('id', this.res.id);
        this.router.navigate(['myaccount']);
      } else {
        console.log(res);
      }
    });
  }

}
