import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/shared/interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-supplierpage',
  templateUrl: './supplierpage.component.html',
  styleUrls: ['./supplierpage.component.scss']
})
export class SupplierpageComponent implements OnInit {

  res: any;
  data: any;
  res1: any;
  data1: any;
  res2: any;
  data2: any;
  id: any;
  constructor(private dataService: DataService,
              private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getSupplier(this.id);
      this.getListProductbyFarmer(this.id);
    });
  }
  getSupplier(id) {
    this.dataService.getSupplier(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
      }
    });
  }
  getListProductbyFarmer(id) {
    this.dataService.getListProductbyFarmer(id).subscribe(res2 => {
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
        }
      });
    } else {
      this.router.navigate(['login']);
    }

  }

}
