import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-farmer-product',
  templateUrl: './farmer-product.component.html',
  styleUrls: ['./farmer-product.component.scss']
})
export class FarmerProductComponent implements OnInit {

  res: any;
  data: any;
  res2: any;
  id: number;
  constructor(private dataService: DataService, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getListProductbyFarmer(this.id);
  }
  getListProductbyFarmer(id) {
    id = localStorage.getItem('id');
    this.dataService.getListProductbyFarmer(id).subscribe(res => {
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
              this.getListProductbyFarmer(id);
            }
          }));
    }
}
