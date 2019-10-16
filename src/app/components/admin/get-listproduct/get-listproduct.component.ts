import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-get-listproduct',
  templateUrl: './get-listproduct.component.html',
  styleUrls: ['./get-listproduct.component.scss']
})
export class GetListproductComponent implements OnInit {
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
