import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  res: any;
  data: any;
  id: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getHistory(this.id);
  }

  // lấy lịch sử theo user
  getHistory(id) {
    id = localStorage.getItem('id');
    this.productService.getHistory(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
      }
    });
  }
}
