
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-get-listorder',
  templateUrl: './get-listorder.component.html',
  styleUrls: ['./get-listorder.component.scss']
})
export class GetListorderComponent implements OnInit {

  res: any;
  data: any;
  id: number;
  constructor(private dataService: DataService, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getListOrder(this.id);
  }
  // lấy danh sách order theo nhà cung cấp
  getListOrder(id) {
    id = localStorage.getItem('id');
    this.dataService.getListOrder(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
        // tslint:disable-next-line: no-unused-expression
        localStorage.setItem('count', '0');
      }
    });
  }
  // chap nhan don hang
  acceptOrder(id) {
    this.confirmationDialogService.confirm('Please confirm', 'Do you want to accept this order?')
      .then(() =>
        this.dataService.acceptOrder(id).subscribe(res => {
          this.res = res;
          if (this.res.success) {
            this.getListOrder(id);
          }
        }))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
  // tu choi don hang
  declineOrder(id) {
    this.dataService.declineOrder(id).subscribe(res => {
      this.res = res;
      // if (this.res.success) {
      //   this.getListOrder(id);
      // }
    });
  }
}
