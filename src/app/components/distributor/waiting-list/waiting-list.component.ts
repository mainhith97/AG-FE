import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.scss']
})
export class WaitingListComponent implements OnInit {

  res: any;
  data: any;
  totals: any;
  cart: any;
  check: boolean;
  constructor(private productService: ProductService,
              private router: Router,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getListWaiting();
  }

  // check localstorage
  readLocalStorageValue(key: string) {
    return localStorage.getItem(key);
  }

  // lấy danh sách chờ
  getListWaiting() {
    this.productService.getListWaiting().subscribe(res => {
      this.res = res;
      this.check = false;
      if (this.res.success) {
        if (this.res.result.length !== 0) {
          this.check = true;
        }
        this.data = this.res.result;
      }
    });
  }

  // xoá sp trong ds chờ
  remove(id: any) {
    this.confirmationDialogService.confirm('Please confirm', 'Do you want to delete this product?')
    .then(() =>
      this.productService.removeWaiting(id).subscribe(res => {
        this.res = res;
        if (this.res.success) {
          this.getListWaiting();
        }
      }));
    }
}
