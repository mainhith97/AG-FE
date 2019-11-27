import { Category } from './../../../shared/interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin-edittype',
  templateUrl: './admin-edittype.component.html',
  styleUrls: ['./admin-edittype.component.scss']
})
export class AdminEdittypeComponent implements OnInit {

  editcategoryForm: FormGroup;
  res: any;
  data: any;
  id: any;
  res2: any;
  data2: any;
  constructor(
      private formBuilder: FormBuilder,
      private dataService: DataService,
      private router: Router,
      private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getType(this.id);
    });
    this.buildForm();

  }

  buildForm() {
      this.editcategoryForm = this.formBuilder.group({
          product_type: ['', Validators.required]
      });
  }

  getType(id: number) {
      this.dataService.getType(id).subscribe(res => {
          this.res = res;

          if (this.res.success) {
              this.data = this.res.result;
              this.editcategoryForm.controls.product_type.setValue(this.data.product_type);
              this.editcategoryForm.controls.id.setValue(this.id);
          }
      });
  }

  submit({ value }: { value: Category }) {
      const id = this.id;
      this.dataService.editType(id, value).subscribe(res2 => {
          this.res2 = res2;
          if (this.res2.success) {
              this.router.navigate(['get-list-type']);
          }
      });
  }
}
