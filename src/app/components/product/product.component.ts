import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  res: any;
  data: any;
  id: string;
  user: any;
  res1: any;
  data1: any;
  res2: any;
  data2: any;
  res3: any;
  data3: any;
  res4: any;
  res5: any;
  data5: any;
  count: any;
  commentForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private confirmationDialogService: ConfirmationDialogService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getDetailProduct(this.id);
      this.getComment(this.id);
    });
    this.buildForm();
  }
  buildForm() {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required],
    });
  }
  // check localstorage
  readLocalStorageValue(key: string) {
    return localStorage.getItem(key);
  }
  // lấy chi tiết sản phẩm
  getDetailProduct(id) {
    this.productService.getDetailProduct(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
        this.user = this.res.user;
      }
    });
  }
  // mua lẻ
  Cart(product: Product) {
    if (this.readLocalStorageValue('id')) {
      this.productService.Cart(product).subscribe(res1 => {
        this.res1 = res1;
        if (this.res1.success) {
          this.data1 = this.res1.response;
          // tslint:disable-next-line: radix
          const newCart = parseInt(localStorage.getItem('giohang')) + 1;
          localStorage.setItem('giohang', newCart.toString());
        }
      });
    } else {
      this.router.navigate(['login']);
    }
  }

  // list comment
  getComment(id) {
    this.productService.getComment(id).subscribe(res2 => {
      this.res2 = res2;
      if (this.res2.success) {
        this.data2 = this.res2.result;
      }
    });
  }
  // post comment
  submit(user, product, comment) {
    if (this.readLocalStorageValue('id')) {
      user = localStorage.getItem('id');
      product = this.data.id;
      comment = this.commentForm.get('comment').value;
      this.productService.postComment(user, product, comment).subscribe(res3 => {
        this.res3 = res3;
        if (this.res3.success) {
          this.getComment(this.id);
          this.commentForm.controls.comment.setValue('');
        }
      });
    } else {
      this.router.navigate(['login']);
    }
  }
  // xoá cmt
  remove(id: any) {
    this.confirmationDialogService.confirm('Please confirm', 'Do you want to delete this comment?')
      .then(() =>
        this.dataService.removeCmt(id).subscribe(res4 => {
          this.res4 = res4;
          if (this.res4.success) {
            this.getComment(this.id);
          }
        }));
  }

  // list reply
  getReply(id) {
    this.productService.getReply(id).subscribe(res5 => {
      this.res5 = res5;
      if (this.res5.success) {
        this.data5 = this.res5.result;
      }
    });
  }
}
