import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Profile } from 'src/app/shared/interface';
import { Router } from '@angular/router';

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
              private router: Router) { }

  ngOnInit() {
    this.getProfile();
    this.buildForm();
  }

  buildForm() {
    this.profileForm = this.formBuilder.group({
      name: [''],
      email: [''],
      company_name: [''],
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
        this.router.navigate(['profile']);
      } else {
        console.log(res);
      }
    });
  }
}
