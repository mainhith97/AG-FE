import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/interface';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  commentForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute
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
      comment: [''],
    });
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
    this.productService.Cart(product).subscribe(res1 => {
      this.res1 = res1;
      if (this.res1.success) {
        this.data1 = this.res1.response;
        // tslint:disable-next-line: radix
        const newCart = parseInt(localStorage.getItem('giohang')) + 1;
        localStorage.setItem('giohang', newCart.toString());
      }
    });
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
    user = localStorage.getItem('id');
    product = this.data.id;
    comment = this.commentForm.get('comment').value;
    this.productService.postComment(user, product, comment).subscribe(res3 => {
      this.res3 = res3;
      if (this.res3.success) {
        this.getComment(this.id);
      }
    });
  }
}
