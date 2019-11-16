import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-get-listproduct',
  templateUrl: './get-listproduct.component.html',
  styleUrls: ['./get-listproduct.component.scss']
})
export class GetListproductComponent implements OnInit {
  res: any;
  data: any;
  res2: any;
  constructor(private dataService: DataService,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getListProduct();
  }
  getListProduct() {

    this.dataService.getListProduct().subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
      }
    });
  }
  // xoá sp
  remove(id: any) {
    this.confirmationDialogService.confirm('Please confirm', 'Do you want to delete this product?')
      .then(() =>
        this.dataService.removeProduct(id).subscribe(res2 => {
          this.res2 = res2;
          if (this.res2.success) {
            this.getListProduct();
          }
        }));
  }
}
