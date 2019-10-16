import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-product',
  templateUrl: './farmer-product.component.html',
  styleUrls: ['./farmer-product.component.scss']
})
export class FarmerProductComponent implements OnInit {

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
