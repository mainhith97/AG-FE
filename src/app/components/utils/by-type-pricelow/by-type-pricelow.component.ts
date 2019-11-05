import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interface';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-by-type-pricelow',
  templateUrl: './by-type-pricelow.component.html',
  styleUrls: ['./by-type-pricelow.component.scss']
})
export class ByTypePricelowComponent implements OnInit {

  res: any;
  res1: any;
  data: any;
  data1: any;
  id: number;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getListProductPriceLow(this.id);
    });
  }
  getListProductPriceLow(id: number) {
    this.productService.getListProductPriceLow(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
      }
    });
  }
  Cart(product: Product) {
    this.productService.Cart(product).subscribe(res1 => {
      this.res1 = res1;
      if (this.res1.success) {
        this.data1 = this.res1.response;
        // tslint:disable-next-line: radix
        const newCart = parseInt(localStorage.getItem('giohang')) + 1;
        localStorage.setItem('giohang', newCart.toString());
      }
    });
  }
  navigateTo(value) {
    if (value) {
      this.router.navigate([value]);
    }
    return false;
  }

}
