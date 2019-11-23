import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activate-user-page',
  templateUrl: './activate-user-page.component.html',
  // tslint:disable-next-line: max-line-length
  styleUrls: ['./activate-user-page.component.scss', '../../../components/header/admin-header/admin-header.component.scss', '../../../components/sidebar/admin-sidebar/admin-sidebar.component.scss']
})
export class ActivateUserPageComponent implements OnInit {

  res: any;
  data: any;

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
