import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UpdatePass } from 'src/app/shared/interface';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-supplier-change-pass',
  templateUrl: './supplier-change-pass.component.html',
  styleUrls: ['./supplier-change-pass.component.scss']
})
export class SupplierChangePassComponent implements OnInit {

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
    this.dataService.supplierUpdatePass(value).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.toastr.success('Update successfully!');
        this.router.navigate(['myaccount']);
      }
    }, error => {
      console.log(error);
      this.toastr.error(error);
    });
  }

}
