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
  check: boolean;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getHistory(this.id);
  }

  // lấy lịch sử theo user
  getHistory(id) {
    id = localStorage.getItem('id');
    this.check = false;
    this.productService.getHistory(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        if (this.res.result.length !== 0) {
          this.check = true;
        }
        this.data = this.res.result;
      }
    });
  }
}
