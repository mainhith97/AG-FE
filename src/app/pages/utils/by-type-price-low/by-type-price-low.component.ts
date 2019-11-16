import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-type-price-low',
  templateUrl: './by-type-price-low.component.html',
  styleUrls: ['./by-type-price-low.component.scss']
})
export class ByTypePriceLowComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.setUrl();
  }
  setUrl() {
    localStorage.setItem('link', this.router.url);
  }
}
