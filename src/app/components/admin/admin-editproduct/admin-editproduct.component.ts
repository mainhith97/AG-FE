import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/interface';

@Component({
  selector: 'app-admin-editproduct',
  templateUrl: './admin-editproduct.component.html',
  styleUrls: ['./admin-editproduct.component.scss']
})
export class AdminEditproductComponent implements OnInit {

  editproductForm: FormGroup;
  res: any;
  data: any;
  provider: any;
  type: any;
  id: any;
  res2: any;
  data2: any;
  res3: any;
  data3: any;
  constructor(
      private formBuilder: FormBuilder,
      private dataService: DataService,
      private productService: ProductService,
      private router: Router,
      private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getDetailProduct(this.id);
    });
    this.getListType();
    this.buildForm();

  }
  // get list category
  getListType() {
    this.productService.getListType().subscribe(res3 => {
      this.res3 = res3;
      if (this.res3.success) {
        this.data3 = this.res3.result;
      }
    });
  }
  buildForm() {
      this.editproductForm = this.formBuilder.group({
          name: [''],
          type: [''],
          provider_id: [''],
          unit: [''],
          price_per_unit: [''],
          in_stock: [''],
          verify: [''],
          description: [''],
          detail: [''],
          id: [this.id]
      });
  }

  getDetailProduct(id: number) {
      this.productService.getDetailProduct(id).subscribe(res => {
          this.res = res;

          if (this.res.success) {
              this.data = this.res.result;
              this.provider = this.res.user;
              this.type = this.res.type;
              this.editproductForm.controls.name.setValue(this.data.name);
              this.editproductForm.controls.type.setValue(this.data.type);
              this.editproductForm.controls.provider_id.setValue(this.data.provider_id);
              this.editproductForm.controls.unit.setValue(this.data.unit);
              this.editproductForm.controls.price_per_unit.setValue(this.data.price_per_unit);
              this.editproductForm.controls.in_stock.setValue(this.data.in_stock);
              this.editproductForm.controls.verify.setValue(this.data.verify);
              this.editproductForm.controls.description.setValue(this.data.description);
              this.editproductForm.controls.detail.setValue(this.data.detail);
              this.editproductForm.controls.id.setValue(this.id);
          }
      });
  }

  submit({ value }: { value: Product }) {
      this.dataService.editProduct(value).subscribe(res2 => {
          this.res2 = res2;
          if (this.res2.success) {
              this.router.navigate(['get-list-product']);
          }
      });
  }

}
