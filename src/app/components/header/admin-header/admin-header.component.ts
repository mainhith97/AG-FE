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
