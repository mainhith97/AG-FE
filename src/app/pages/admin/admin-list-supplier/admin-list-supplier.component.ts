import { Component, OnInit } from '@angular/core';
import { ISearch } from 'src/app/shared/interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list-supplier',
  templateUrl: './admin-list-supplier.component.html',
  // tslint:disable-next-line: max-line-length
  styleUrls: ['./admin-list-supplier.component.scss', '../../../components/header/admin-header/admin-header.component.scss', '../../../components/sidebar/admin-sidebar/admin-sidebar.component.scss']
})
export class AdminListSupplierComponent implements OnInit {

  searchForm: FormGroup;
  res: any;
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit() {

    // giỏ hàng
    this.buildForm();
  }
  buildForm() {
    this.searchForm = this.formBuilder.group({
      keyword: ['']
    });
  }
  // nhan nut search
  submit({ value }: { value: ISearch }) {
    this.productService.search(value).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
        this.router.navigate(['user'], { queryParams: { keyword: this.data } });
        console.log(this.data);
      }
    });
  }
  logout() {
    localStorage.removeItem('adminToken');
    // localStorage.removeItem('id');
    this.router.navigate(['admin']);
  }

}
