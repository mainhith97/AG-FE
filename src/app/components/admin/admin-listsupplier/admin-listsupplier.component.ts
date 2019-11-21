import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-admin-listsupplier',
  templateUrl: './admin-listsupplier.component.html',
  styleUrls: ['./admin-listsupplier.component.scss']
})
export class AdminListsupplierComponent implements OnInit {

  res: any;
  data: any;
  res2: any;
  constructor(
    private dataService: DataService,
    private confirmationDialogService: ConfirmationDialogService
  ) { }

  ngOnInit() {
    this.getListSupplier();
  }
  getListSupplier() {

    this.dataService.getListSupplier().subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
      }
    });
  }
  // xoá user
  remove(id: any) {
    this.confirmationDialogService.confirm('Please confirm', 'Do you want to delete this user?')
      .then(() =>
        this.dataService.removeUser(id).subscribe(res2 => {
          this.res2 = res2;
          if (this.res2.success) {
            this.getListSupplier();
          }
        }));
  }

}
