import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduce-page',
  templateUrl: './introduce-page.component.html',
  styleUrls: ['./introduce-page.component.scss']
})
export class IntroducePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.setUrl();
  }
  setUrl() {
    localStorage.setItem('link', this.router.url);
  }
}
