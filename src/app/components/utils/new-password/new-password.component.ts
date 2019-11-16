import { Password } from './../../../shared/interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  passwordForm: FormGroup;
  res: any;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required]
    });
  }
  submit({ value }: { value: Password }) {
    value.token = this.route.snapshot.queryParamMap.get('token');
    console.log(this.route);
    return this.dataService.changePassword(value).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.router.navigate(['login']);
      }
    });
  }
}
