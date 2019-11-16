import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-type-lastest',
  templateUrl: './by-type-lastest.component.html',
  styleUrls: ['./by-type-lastest.component.scss']
})
export class ByTypeLastestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.setUrl();
  }
  setUrl() {
    localStorage.setItem('link', this.router.url);
  }
}
