import { Component, OnInit } from '@angular/core';
import { UpdatePass } from 'src/app/shared/interface';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-change-pass',
  templateUrl: './user-change-pass.component.html',
  styleUrls: ['./user-change-pass.component.scss']
})
export class UserChangePassComponent implements OnInit {

  res: any;
  data: any;
  id: number;
  passForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.passForm = this.formBuilder.group({
      oldpassword: ['', Validators.required],
      newpassword: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

  submit({ value }: { value: UpdatePass }) {
    this.dataService.updatePass(value).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.toastr.success('Update successfully!');
        this.router.navigate(['home']);
      }
    }, error => {
      console.log(error);
      this.toastr.error(error);
    });
  }

}
