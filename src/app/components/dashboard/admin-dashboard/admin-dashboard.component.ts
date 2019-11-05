import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  res: any;
  users: any;
  products: any;
  sales: any;
  requests: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getStatistic();
  }
  getStatistic() {

    this.dataService.getStatistic().subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.users = this.res.users;
        this.products = this.res.products;
        this.sales = this.res.sales;
        this.requests = this.res.requests;
      }
    });
  }
}
