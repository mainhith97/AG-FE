import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  res: any;
  data: any;
  res2: any;
  data2: any;
  totals: any;
  res3: any;
  username: any;
  companyname: any;
  unit: any;
  profileForm: FormGroup;
  constructor(private dataService: DataService,
              private productService: ProductService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.getProfile();
    this.getListCart();
    this.buildForm();
  }

  buildForm() {
    this.profileForm = this.formBuilder.group({
      address: ['', Validators.required],
      telephone: ['', Validators.required]
    });
  }

  // lấy thông tin user
  getProfile() {

    this.dataService.getProfile().subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
        this.username = this.data.name;
        this.companyname = this.data.company_name;
        this.profileForm.controls.address.setValue(this.data.address);
        this.profileForm.controls.telephone.setValue(this.data.telephone);
      }
    });
  }
  // danh sách giỏ hàng
  getListCart() {

    this.productService.getListCart().subscribe(res2 => {
      this.res2 = res2;
      if (this.res2.success) {
        this.data2 = this.res2.result;
        this.totals = this.res2.totals;
      }
    });
  }

  // thêm vào lịch sử mua hàng
  submit(id, companyname, totals, product, address, telephone) {
    id = localStorage.getItem('id');
    companyname = this.companyname;
    totals = this.totals;
    // tslint:disable-next-line: no-string-literal
    address = this.profileForm.controls['address'].value;
    // tslint:disable-next-line: no-string-literal
    telephone = this.profileForm.controls['telephone'].value;
    product = '';
    for (const i of this.data2) {
      product += i.quantity + ' ' + i.product_value.unit + ' ' + i.product_value.name + '\n';
    }
    this.productService.addToHistory(id, companyname, totals, product, address, telephone).subscribe(res3 => {
      this.res3 = res3;
      if (this.res3.success) {
        this.router.navigate(['history']);
        localStorage.setItem('giohang', '0');
      }
    });
  }


}
