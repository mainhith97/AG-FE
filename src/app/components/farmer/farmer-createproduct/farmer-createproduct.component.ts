import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-farmer-createproduct',
  templateUrl: './farmer-createproduct.component.html',
  styleUrls: ['./farmer-createproduct.component.scss']
})
export class FarmerCreateproductComponent implements OnInit {

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
  // id: any;
  image: any;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private productService: ProductService,
    private router: Router,
    private http: HttpClient
  ) { }
  ngOnInit() {
    this.getListType();
    this.buildForm();
  }

  buildForm() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      unit: ['', Validators.required],
      price_per_unit: ['', Validators.required],
      in_stock: ['', Validators.required],
      verify: ['', Validators.required],
      description: [''],
      detail: [''],
      image: ['']
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
  submit({ value }: { value: Product }) {
    value.provider_id = localStorage.getItem('id');
    value.image = this.image;
    this.dataService.postProduct(value).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.router.navigate(['get-listproduct']);
      }
    });
  }

}
