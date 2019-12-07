import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interface';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { DataService } from 'src/app/services/data.service';

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
  res2: any;
  data2: any;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router,
              private toastr: ToastrService,
              private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getListProductPriceLow(this.id);
      this.getType(this.id);
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
  getType(id: number) {
    this.dataService.getType(id).subscribe(res2 => {
      this.res2 = res2;
      if (this.res2.success) {
        this.data2 = this.res2.result;
      }
    });
  }
  // check localstorage
  readLocalStorageValue(key: string) {
    return localStorage.getItem(key);
  }
  Cart(product: Product) {
    if (this.readLocalStorageValue('id')) {
      this.productService.Cart(product).subscribe(res1 => {
        this.res1 = res1;
        if (this.res1.success) {
          this.data1 = this.res1.response;
          // tslint:disable-next-line: radix
          const newCart = parseInt(localStorage.getItem('giohang')) + 1;
          localStorage.setItem('giohang', newCart.toString());
          this.toastr.success('The product has been added to cart!');
        }
      });
    } else {
      this.router.navigate(['login']);
    }

  }
  navigateTo(value) {
    if (value) {
      this.router.navigate([value]);
    }
    return false;
  }

}
