import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-get-order',
  templateUrl: './get-order.component.html',
  styleUrls: ['./get-order.component.scss']
})
export class GetOrderComponent implements OnInit {

  res: any;
  data: any;
  id: number;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getOrder(this.id);
  }
  getOrder(id) {
    id = localStorage.getItem('id');
    this.productService.getOrder(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
      }
    });
  }
}
