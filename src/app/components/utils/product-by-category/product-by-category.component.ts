import { DataService } from './../../../services/data.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/shared/interface';


@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.scss']
})
export class ProductByCategoryComponent implements OnInit {

  res: any;
  res1: any;
  data: any;
  data1: any;
  id: number;
  res2: any;
  data2: any;
  res6: any;
  data6: any;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router,
              private toastr: ToastrService,
              private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getListProductByType(this.id);
      this.getType(this.id);
    });
  }
  // check localstorage
  readLocalStorageValue(key: string) {
    return localStorage.getItem(key);
  }
  getListProductByType(id: number) {
    this.productService.getListProductByType(id).subscribe(res => {
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
  Waiting(product: Product) {
    if (this.readLocalStorageValue('id')) {
      this.productService.Waiting(product).subscribe(res6 => {
        this.res6 = res6;
        if (this.res6.success) {
          this.data6 = this.res6.response;
          this.router.navigate(['waiting-list']);
        }
      }, error => {
        console.log(error);
        this.toastr.error(error);
      });
    } else {
      this.router.navigate(['login']);
    }
  }
}
