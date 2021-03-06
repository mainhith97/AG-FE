import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { ProductService } from 'src/app/services/product.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-bytype',
  templateUrl: './product-bytype.component.html',
  styleUrls: ['./product-bytype.component.scss']
})
export class ProductBytypeComponent implements OnInit {

  res: any;
  data: any;
  res2: any;
  data2: any;
  res3: any;
  id: any;
  constructor(private dataService: DataService,
              private productService: ProductService,
              private confirmationDialogService: ConfirmationDialogService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getType(this.id);
      this.getListProductByType(this.id);
    });
  }
  getType(id: number) {

    this.dataService.getType(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
      }
    });
  }
  getListProductByType(id: number) {

    this.productService.getListProductByType(id).subscribe(res2 => {
      this.res2 = res2;
      if (this.res2.success) {
        this.data2 = this.res2.result;
      }
    });
  }
  // xoá sp
  remove(id: any) {
    this.confirmationDialogService.confirm('Please confirm', 'Do you want to delete this product?')
      .then(() =>
        this.dataService.removeProduct(id).subscribe(res3 => {
          this.res3 = res3;
          if (this.res3.success) {
            this.getListProductByType(this.id);
          }
        }));
  }

}
