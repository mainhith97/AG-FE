import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-type-page',
  templateUrl: './admin-type-page.component.html',
  // tslint:disable-next-line: max-line-length
  styleUrls: ['./admin-type-page.component.scss', '../../../components/header/admin-header/admin-header.component.scss', '../../../components/sidebar/admin-sidebar/admin-sidebar.component.scss']
})
export class AdminTypePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem('adminToken');
    // localStorage.removeItem('id');
    this.router.navigate(['admin']);
  }

}
