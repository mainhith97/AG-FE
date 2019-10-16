import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { IRegister } from 'src/app/shared/interface';

@Component({
  selector: 'app-farmer-signup',
  templateUrl: './farmer-signup.component.html',
  styleUrls: ['./farmer-signup.component.scss']
})
export class FarmerSignupComponent implements OnInit {

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
      company_name: [''],
      email: ['', Validators.required],
      address: [''],
      telephone: [''],
      description: ['']
    });
  }
  submit({ value }: { value: IRegister }) {
    return this.registerService.postRegister2(value).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        console.log(res);
        console.log(value);
        localStorage.setItem('farmerToken', this.res.result);
        this.router.navigate(['myaccount']);

      } else {
        console.log(res);
      }
    });
  }

}
