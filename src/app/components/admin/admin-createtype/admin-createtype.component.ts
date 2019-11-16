import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/interface';

@Component({
  selector: 'app-admin-createtype',
  templateUrl: './admin-createtype.component.html',
  styleUrls: ['./admin-createtype.component.scss']
})
export class AdminCreatetypeComponent implements OnInit {

  categoryForm: FormGroup;
  res: any;
  data: any;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
  ) { }
  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.categoryForm = this.formBuilder.group({
      product_type: ['', Validators.required],
    });
  }

  submit({value }: {value: Category}) {
    this.dataService.postType(value).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.router.navigate(['get-list-type']);
      }
    });
  }

}
