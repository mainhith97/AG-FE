import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.scss']
})
export class AdminSearchComponent implements OnInit {

  res: any;
  data: any;
  res2: any;
  keyword: string;
  check: boolean;
  constructor(private dataService: DataService,
              private confirmationDialogService: ConfirmationDialogService,
              private productService: ProductService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.keyword = queryParams.keyword;
      this.getSearchResult(this.keyword);
    });
  }
  // đổ dữ liệu tìm kiếm
  getSearchResult(keyword: string) {
    this.productService.getSearchResult(keyword).subscribe(res => {
      this.res = res;
      this.check = false;
      if (this.res.success === true) {
        if (this.res.result.length !== 0) {
          this.check = true;
        }
        this.data = this.res.result;
      }
    });
  }
  // xoá sp
  remove(id: any) {
    this.confirmationDialogService.confirm('Vui lòng xác nhận', 'Bạn muốn xoá sản phẩm này ?')
      .then(() =>
        this.dataService.removeProduct(id).subscribe(res2 => {
          this.res2 = res2;
          if (this.res2.success) {
            this.getSearchResult(this.keyword);
          }
        }));
  }
}
