import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.scss']
})
export class ProductLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.setUrl();
  }
  setUrl() {
    localStorage.setItem('link', this.router.url);
  }
}
