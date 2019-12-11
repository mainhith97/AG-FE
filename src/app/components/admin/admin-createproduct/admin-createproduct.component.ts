import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-createproduct',
  templateUrl: './admin-createproduct.component.html',
  styleUrls: ['./admin-createproduct.component.scss']
})
export class AdminCreateproductComponent implements OnInit {

  productForm: FormGroup;
  res: any;
  data: any;
  res2: any;
  data2: any;
  res3: any;
  data3: any;
  res4: any;
  res5: any;
  data5: any;
  image: File;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private productService: ProductService,
    private router: Router,
    private http: HttpClient
  ) { }
  ngOnInit() {
    this.getListType();
    this.getListFarmer();
    this.buildForm();
  }

  buildForm() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      provider_id: ['', Validators.required],
      unit: ['', Validators.required],
      price_per_unit: ['', Validators.required],
      // in_stock: ['', Validators.required],
      verify: ['', Validators.required],
      description: [''],
      detail: [''],
      image: ['', Validators.required]
    });
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
  // get list farmer
  getListFarmer() {
    this.dataService.getListSupplier().subscribe(res2 => {
      this.res2 = res2;
      if (this.res2.success) {
        this.data2 = this.res2.result;
      }
    });
  }
  getListProduct() {
    this.dataService.getListProduct().subscribe(res5 => {
      this.res5 = res5;
      if (this.res5.success) {
        this.data5 = this.res5.result;
      }
    });
  }

  fileChange(event) {
    this.image = event.target.files[0];
  }


  submit({value }: {value: Product}) {
    value.image = this.image;
    this.dataService.createProduct(value).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.router.navigate(['get-list-product']);
      }
    });
  }
}
