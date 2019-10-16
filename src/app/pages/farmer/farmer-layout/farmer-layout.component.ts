import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-layout',
  templateUrl: './farmer-layout.component.html',
  // tslint:disable-next-line: max-line-length
  styleUrls: ['./farmer-layout.component.scss', '../../../components/header/farmer-header/farmer-header.component.scss', '../../../components/sidebar/farmer-sidebar/farmer-sidebar.component.scss', '../../../components/dashboard/farmer-dashboard/farmer-dashboard.component.scss']
})
export class FarmerLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
