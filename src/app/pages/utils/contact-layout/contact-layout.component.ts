import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-layout',
  templateUrl: './contact-layout.component.html',
  styleUrls: ['./contact-layout.component.scss']
})
export class ContactLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.setUrl();
  }
  setUrl() {
    localStorage.setItem('link', this.router.url);
  }
}
