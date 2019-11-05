import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-farmer-dashboard',
  templateUrl: './farmer-dashboard.component.html',
  styleUrls: ['./farmer-dashboard.component.scss']
})
export class FarmerDashboardComponent implements OnInit {

  res: any;
  products: any;
  sales: any;
  requests: any;
  responses: any;
  total: any;
  id: any;
  data: any;
  res2: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getStatisticbyFarmer(this.id);
    this.getProfile();
  }
  getStatisticbyFarmer(id) {
    id = localStorage.getItem('id');
    this.dataService.getStatisticbyFarmer(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.products = this.res.products;
        this.sales = this.res.history;
        this.requests = this.res.orders;
        this.responses = this.res.responses;
        this.total = this.res.total_revenue;
      }
    });
  }

    // lấy thông tin user
    getProfile() {

      this.dataService.getProfile().subscribe(res2 => {
        this.res2 = res2;
        if (this.res2.success) { this.data = this.res2.result; }
      });
    }

}
