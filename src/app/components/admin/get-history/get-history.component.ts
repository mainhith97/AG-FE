import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-get-history',
  templateUrl: './get-history.component.html',
  styleUrls: ['./get-history.component.scss']
})
export class GetHistoryComponent implements OnInit {

  res: any;
  data: any;
  constructor(private dataService: DataService,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getHistory();
  }
  // lấy tất cả lịch sử mua hàng
  getHistory() {
    this.dataService.getHistory().subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result;
      }
    });
  }
  // thay đổi status
  changeStatus(id) {
    this.confirmationDialogService.confirm('Vui lòng xác nhận', 'Bạn muốn thay đổi trạng thái đơn hàng này ?')
    .then(() =>
    this.dataService.changeStatus(id).subscribe(res => {
          this.res = res;
          if (this.res.success) {
            this.getHistory();
          }
        }))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}
