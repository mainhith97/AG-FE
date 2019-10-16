import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-farmer-history',
  templateUrl: './farmer-history.component.html',
  styleUrls: ['./farmer-history.component.scss']
})
export class FarmerHistoryComponent implements OnInit {

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
}
