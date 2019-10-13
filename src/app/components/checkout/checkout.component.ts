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
  constructor(private dataService: DataService, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProfile();
    this.getListCart();
  }
  // lấy thông tin user
  getProfile() {

    this.dataService.getProfile().subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
        this.username = this.data.name;
      }
    });
  }
  getListCart() {

    this.productService.getListCart().subscribe(res2 => {
      this.res2 = res2;
      if (this.res2.success) {
        this.data2 = this.res2.result;
        this.totals = this.res2.totals;
      }
    });
  }
  addToHistory(id, username, totals, product) {
    id = localStorage.getItem('id');
    username = this.username;
    totals = this.totals;
    product = '';
    for (const i of this.data2) {
      product += i.quantity + ' ' + i.product_value.name + '\n';
    }
    this.productService.addToHistory(id, username, totals, product).subscribe(res3 => {
      this.res3 = res3;
      if (this.res3.success) {
        this.router.navigate(['history']);
        localStorage.setItem('giohang', '0');
      }
    });
  }
}
