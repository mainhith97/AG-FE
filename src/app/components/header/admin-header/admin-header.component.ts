import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISearch } from 'src/app/shared/interface';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss', '../../utils/admin.min.css']
})
export class AdminHeaderComponent implements OnInit {
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
        this.router.navigate(['searchpage'], { queryParams: { keyword: this.data } });
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
