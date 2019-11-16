import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit-type',
  templateUrl: './admin-edit-type.component.html',
  // tslint:disable-next-line: max-line-length
  styleUrls: ['./admin-edit-type.component.scss', '../../../components/header/admin-header/admin-header.component.scss', '../../../components/sidebar/admin-sidebar/admin-sidebar.component.scss']
})
export class AdminEditTypeComponent implements OnInit {

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
