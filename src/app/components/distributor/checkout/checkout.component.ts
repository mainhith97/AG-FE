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
      name: [''],
      address: [''],
      telephone: ['']
    });
  }

  // lấy thông tin user
  getProfile() {

    this.dataService.getProfile().subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
        this.username = this.data.name;
        this.profileForm.controls.name.setValue(this.data.name);
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
  submit(id, username, totals, product, address) {
    id = localStorage.getItem('id');
    username = this.username;
    totals = this.totals;
    // tslint:disable-next-line: no-string-literal
    address = this.profileForm.controls['address'].value;
    product = '';
    for (const i of this.data2) {
      product += i.quantity + ' ' + i.product_value.unit + ' ' + i.product_value.name + '\n';
    }
    this.productService.addToHistory(id, username, totals, product, address).subscribe(res3 => {
      this.res3 = res3;
      if (this.res3.success) {
        this.router.navigate(['history']);
        localStorage.setItem('giohang', '0');
      }
    });
  }


}
