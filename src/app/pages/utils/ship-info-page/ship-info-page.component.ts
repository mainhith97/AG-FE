import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ship-info-page',
  templateUrl: './ship-info-page.component.html',
  styleUrls: ['./ship-info-page.component.scss']
})
export class ShipInfoPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.setUrl();
  }
  setUrl() {
    localStorage.setItem('link', this.router.url);
  }

}
