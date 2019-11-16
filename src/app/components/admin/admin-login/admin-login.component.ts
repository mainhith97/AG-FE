import { DataService } from '../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/shared/interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
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
  submit({ value }: { value: ILogin }) {
    return this.loginService.postLogin2(value).subscribe(res => {
      this.res = res;
      if (this.res.success && this.res.role === 'mod') {
          localStorage.setItem('adminToken', this.res.result);
          this.router.navigate(['main']);
      }
      } , error => {
        console.log(error);
        this.toastr.error(error);
      });
  }
}
