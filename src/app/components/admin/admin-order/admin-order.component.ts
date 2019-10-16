import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent implements OnInit {

  res: any;
  data: any;
  constructor(private dataService: DataService) { }

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

}
