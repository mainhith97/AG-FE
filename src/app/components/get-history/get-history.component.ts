import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-get-history',
  templateUrl: './get-history.component.html',
  styleUrls: ['./get-history.component.scss']
})
export class GetHistoryComponent implements OnInit {

  res: any;
  data: any;
  constructor(private dataService: DataService) { }

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
    if (confirm('Bạn muốn thay đổi trạng thái đơn hàng này không?')) {
      this.dataService.changeStatus(id).subscribe(res => {
        this.res = res;
        if (this.res.success) {
          this.getHistory();
        }
      });
    }
  }
}
