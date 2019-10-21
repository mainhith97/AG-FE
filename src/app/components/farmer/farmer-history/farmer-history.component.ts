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
  sumTotal: any;
  id: number;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getHistorybyFarmer(this.id);
  }
  // lấy tất cả lịch sử mua hàng
  getHistorybyFarmer(id) {
    id = localStorage.getItem('id');
    this.dataService.getListHistorybyFarmer(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result;
                this.sumTotal = this.res.sum_total;
      }
    });
  }
}
