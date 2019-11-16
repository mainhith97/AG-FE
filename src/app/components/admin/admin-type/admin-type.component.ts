import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/product.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-admin-type',
  templateUrl: './admin-type.component.html',
  styleUrls: ['./admin-type.component.scss']
})
export class AdminTypeComponent implements OnInit {

  res: any;
  data: any;
  res2: any;
  constructor(private dataService: DataService,
              private productService: ProductService,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getListType();
  }
  getListType() {

    this.productService.getListType().subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
      }
    });
  }
  // xoá sp
  remove(id: any) {
    this.confirmationDialogService.confirm('Please confirm', 'Do you want to delete this category?')
      .then(() =>
        this.dataService.removeType(id).subscribe(res2 => {
          this.res2 = res2;
          if (this.res2.success) {
            this.getListType();
          }
        }));
  }
}
