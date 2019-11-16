import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-type-price-high',
  templateUrl: './by-type-price-high.component.html',
  styleUrls: ['./by-type-price-high.component.scss']
})
export class ByTypePriceHighComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.setUrl();
  }
  setUrl() {
    localStorage.setItem('link', this.router.url);
  }
}
