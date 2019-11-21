import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { IRegister } from 'src/app/shared/interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  res: any;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: [''],
      company_name: ['', Validators.required],
      email: ['', Validators.required],
      address: [''],
      telephone: [''],
      description: ['']
    });
  }
  submit({ value }: { value: IRegister }) {
    return this.registerService.postRegister(value).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        localStorage.setItem('userToken', this.res.result);
        localStorage.setItem('id', this.res.id);
        localStorage.setItem('giohang', '0');
        this.router.navigate(['home']);

      } else {
        console.log(res);
      }
    });
  }

}
