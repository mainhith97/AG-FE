import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-product-by-supplier',
  templateUrl: './product-by-supplier.component.html',
  styleUrls: ['./product-by-supplier.component.scss']
})
export class ProductBySupplierComponent implements OnInit {

  res: any;
  data: any;
  res1: any;
  data1: any;
  res2: any;
  data2: any;
  res3: any;
  id: any;
  constructor(private dataService: DataService,
              private route: ActivatedRoute, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getSupplier(this.id);
      this.getListProductbyFarmer(this.id);
    });
  }
  getSupplier(id) {
    this.dataService.getSupplier(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
      }
    });
  }
  getListProductbyFarmer(id) {
    this.dataService.getListProductbyFarmer(id).subscribe(res2 => {
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
            this.getListProductbyFarmer(this.id);
          }
        }));
  }
}
