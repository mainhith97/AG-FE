import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-farmer-header',
  templateUrl: './farmer-header.component.html',
  styleUrls: ['./farmer-header.component.scss', '../../utils/admin.min.css']
})
export class FarmerHeaderComponent implements OnInit {

  res: any;
  data: any;
  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getProfile();
  }
  // lấy thông tin user
  getProfile() {

    this.dataService.getProfile().subscribe(res => {
      this.res = res;
      if (this.res.success) { this.data = this.res.result; }
    });
  }

  logout() {
    localStorage.removeItem('farmerToken');
    localStorage.removeItem('id');
    this.router.navigate(['home']);
  }
}
