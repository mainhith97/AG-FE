import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Profile } from 'src/app/shared/interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  res: any;
  data: any;
  id: number;
  profileForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getProfile();
    this.buildForm();
  }

  buildForm() {
    this.profileForm = this.formBuilder.group({
      name: [''],
      email: ['', Validators.required],
      company_name: ['', Validators.required],
      address: [''],
      telephone: ['']
    });
  }
  getProfile() {
    this.dataService.getProfile().subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
        this.profileForm.controls.name.setValue(this.data.name);
        this.profileForm.controls.email.setValue(this.data.email);
        this.profileForm.controls.company_name.setValue(this.data.company_name);
        this.profileForm.controls.address.setValue(this.data.address);
        this.profileForm.controls.telephone.setValue(this.data.telephone);
      }
    });
  }

  submit({ value }: { value: Profile }) {
    value.username = localStorage.getItem('username');
    this.dataService.updateProfile(value).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.toastr.success('Edit successfully!');
        this.router.navigate(['profile']);
      }
    }, error => {
      console.log(error);
      if (error.email) {
        this.toastr.error(error.email);
      }
      if (error.telephone) {
        this.toastr.error(error.telephone);
      }
    });
  }
}
