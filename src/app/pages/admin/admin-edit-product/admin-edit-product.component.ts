import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISearch } from 'src/app/shared/interface';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  // tslint:disable-next-line: max-line-length
  styleUrls: ['./admin-edit-product.component.scss', '../../../components/header/admin-header/admin-header.component.scss', '../../../components/sidebar/admin-sidebar/admin-sidebar.component.scss']
})
export class AdminEditProductComponent implements OnInit {


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
