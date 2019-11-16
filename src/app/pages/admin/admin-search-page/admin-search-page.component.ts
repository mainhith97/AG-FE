import { Component, OnInit } from '@angular/core';
import { ISearch } from 'src/app/shared/interface';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-search-page',
  templateUrl: './admin-search-page.component.html',
  // tslint:disable-next-line: max-line-length
  styleUrls: ['./admin-search-page.component.scss', '../../../components/header/admin-header/admin-header.component.scss', '../../../components/sidebar/admin-sidebar/admin-sidebar.component.scss']
})
export class AdminSearchPageComponent implements OnInit {

  constructor(

    private router: Router
  ) { }

  ngOnInit() {

  }

  logout() {
    localStorage.removeItem('adminToken');
    // localStorage.removeItem('id');
    this.router.navigate(['admin']);
  }

}
