import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-farmer-listproduct',
  templateUrl: './farmer-listproduct.component.html',
  // tslint:disable-next-line: max-line-length
  styleUrls: ['./farmer-listproduct.component.scss', '../../../components/header/farmer-header/farmer-header.component.scss', '../../../components/sidebar/farmer-sidebar/farmer-sidebar.component.scss']
})
export class FarmerListproductComponent implements OnInit {

  res: any;
  data: any;
  res1: any;
  data1: any;
  id: number;
  count: any;
  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getProfile();
    this.getUnseenOrder(this.id);
    this.readLocalStorageValue('count');
  }
  // lấy thông tin user
  getProfile() {

    this.dataService.getProfile().subscribe(res => {
      this.res = res;
      if (this.res.success) { this.data = this.res.result; }
    });
  }
  getUnseenOrder(id) {
    id = localStorage.getItem('id');
    this.dataService.getUnseenOrder(id).subscribe(res1 => {
      this.res1 = res1;
      if (this.res1.success) {
        localStorage.setItem('count', this.res1.result);
      }
    });
  }
    // check localstorage
    readLocalStorageValue(key) {
      this.count = localStorage.getItem(key);
      console.log(this.count);
    }
  logout() {
    localStorage.removeItem('farmerToken');
    localStorage.removeItem('id');
    this.router.navigate(['home']);
  }
}
