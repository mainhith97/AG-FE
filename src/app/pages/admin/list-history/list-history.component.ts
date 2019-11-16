import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISearch } from 'src/app/shared/interface';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-history',
  templateUrl: './list-history.component.html',
  // tslint:disable-next-line: max-line-length
  styleUrls: ['./list-history.component.scss', '../../../components/header/admin-header/admin-header.component.scss', '../../../components/sidebar/admin-sidebar/admin-sidebar.component.scss']
})
export class ListHistoryComponent implements OnInit {

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
