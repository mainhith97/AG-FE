import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list-reply',
  templateUrl: './admin-list-reply.component.html',
  // tslint:disable-next-line: max-line-length
  styleUrls: ['./admin-list-reply.component.scss', '../../../components/header/admin-header/admin-header.component.scss', '../../../components/sidebar/admin-sidebar/admin-sidebar.component.scss']
})
export class AdminListReplyComponent implements OnInit {

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
