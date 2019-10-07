import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

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
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getDetailProduct(this.id);
    });
  }
  getDetailProduct(id) {
    this.productService.getDetailProduct(id).subscribe(res => {
        this.res = res;
        console.log('done');
        if (this.res.success) {
            this.data = this.res.result;
            this.user = this.res.user;
        }
    });
}
}
