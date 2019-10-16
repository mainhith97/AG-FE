import { DataService } from '../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/shared/interface';

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
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }
  submit({ value }: { value: ILogin }) {
    return this.loginService.postLogin2(value).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        if (this.res.role === 'mod') {
          localStorage.setItem('adminToken', this.res.result);
          localStorage.setItem('id', this.res.id);
          this.router.navigate(['main']);
        }

      } else {
        console.log(res);
      }
    });
  }
}
