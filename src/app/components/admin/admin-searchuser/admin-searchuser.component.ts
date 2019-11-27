import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin-searchuser',
  templateUrl: './admin-searchuser.component.html',
  styleUrls: ['./admin-searchuser.component.scss']
})
export class AdminSearchuserComponent implements OnInit {

  res: any;
  data: any;
  res2: any;
  keyword: string;
  check: boolean;
  constructor(private dataService: DataService,
              private confirmationDialogService: ConfirmationDialogService,
              private productService: ProductService,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.keyword = queryParams.keyword;
      this.getSearchUser(this.keyword);
    });
  }
  // đổ dữ liệu tìm kiếm
  getSearchUser(keyword: string) {
    this.dataService.getSearchUser(keyword).subscribe(res => {
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
  // xoá user
  remove(id: any) {
    this.confirmationDialogService.confirm('Please confirm', 'Do you want to ban this user?')
      .then(() =>
        this.dataService.removeUser(id).subscribe(res2 => {
          this.res2 = res2;
          if (this.res2.success) {
            this.getSearchUser(this.keyword);
          }
        }));
  }
}
