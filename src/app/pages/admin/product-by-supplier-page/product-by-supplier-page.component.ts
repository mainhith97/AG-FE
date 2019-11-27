import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-by-supplier-page',
  templateUrl: './product-by-supplier-page.component.html',
  // tslint:disable-next-line: max-line-length
  styleUrls: ['./product-by-supplier-page.component.scss', '../../../components/header/admin-header/admin-header.component.scss', '../../../components/sidebar/admin-sidebar/admin-sidebar.component.scss']
})
export class ProductBySupplierPageComponent implements OnInit {

  constructor(

    private router: Router,
  ) { }

  ngOnInit() {

  }
  logout() {
    localStorage.removeItem('adminToken');
    // localStorage.removeItem('id');
    this.router.navigate(['admin']);
  }

}
