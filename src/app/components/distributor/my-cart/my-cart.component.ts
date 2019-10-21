import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interface';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  res: any;
  data: any;
  totals: any;
  cart: any;
  check: boolean;
  constructor(private productService: ProductService,
              private router: Router,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getListCart();
  }

  // check localstorage
  readLocalStorageValue(key: string) {
    return localStorage.getItem(key);
  }

  // lấy danh sách giỏ hàng và tổng tiền
  getListCart() {
    this.productService.getListCart().subscribe(res => {
      this.res = res;
      this.check = false;
      if (this.res.success) {
        if (this.res.result.length !== 0) {
          this.check = true;
        }
        this.data = this.res.result;
        this.totals = this.res.totals;
      }
    });
  }

  // nút tăng số lượng
  onAddQuantity(product: Product) {
    this.productService.putQuantity(product.id, product.quantity, 'plus').subscribe(res => {
      this.res = res;
      if (this.res.success) {
        product.quantity += 1;
        const oldTotal = product.total;
        product.total = product.quantity * product.product_value.price_per_unit;
        this.totals = this.totals + product.total - oldTotal;
        // tslint:disable-next-line: radix
        const newCart = (parseInt(localStorage.getItem('giohang')) + 1).toString();
        localStorage.setItem('giohang', newCart);
      }
    });
  }

  // nút giảm số lượng
  onRemoveQuantity(product: Product) {
    this.productService.putQuantity(product.id, product.quantity, 'minus').subscribe(res => {
      this.res = res;
      if (this.res.success) {
        product.quantity -= 1;
        const oldTotal = product.total;
        product.total = product.quantity * product.product_value.price_per_unit;
        this.totals = this.totals + product.total - oldTotal;
        // tslint:disable-next-line: radix
        const newCart = (parseInt(localStorage.getItem('giohang')) - 1).toString();
        localStorage.setItem('giohang', newCart);
      }
    });
  }

  // xoá sp trong giỏ hàng
  remove(id: any, quantity: any) {
    this.confirmationDialogService.confirm('Vui lòng xác nhận', 'Bạn muốn xoá sản phẩm này ?')
    .then(() =>
      this.productService.remove(id, quantity).subscribe(res => {
        this.res = res;
        if (this.res.success) {
          this.getListCart();
          // tslint:disable-next-line: radix
          const newCart = (parseInt(localStorage.getItem('giohang')) - quantity).toString();
          localStorage.setItem('giohang', newCart);
        }
      }));
    }
  }

