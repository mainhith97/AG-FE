import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.setUrl();
  }
  setUrl() {
    localStorage.setItem('link', this.router.url);
  }
}
