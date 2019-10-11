import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Query } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ISearch, Product } from 'src/app/shared/interface';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  res: any;
  data: any;
  keyword: string;
  value: ISearch;
  res1: any;
  check: boolean;
  data1: any;

  constructor( private productService: ProductService,
               private formBuilder: FormBuilder,
               private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.keyword = queryParams.keyword;
      this.getSearchResult(this.keyword);
    });
    this.buildForm();
  }
  buildForm() {
    this.searchForm = this.formBuilder.group({
      keyword: ['']
    });
  }
  // đổ dữ liệu tìm kiếm
  getSearchResult(keyword: string) {
    this.productService.getSearchResult(keyword).subscribe(res => {
      this.res = res;
      this.check = false;
      if (this.res.success === true) {
        if (this.res.result.length !== 0) {
          this.check = true;
        }
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
}
