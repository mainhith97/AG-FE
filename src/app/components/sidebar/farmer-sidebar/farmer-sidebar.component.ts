import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-sidebar',
  templateUrl: './farmer-sidebar.component.html',
  styleUrls: ['./farmer-sidebar.component.scss']
})
export class FarmerSidebarComponent implements OnInit {

  res: any;
  id: number;
  count: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getUnseenOrder(this.id);
    this.readLocalStorageValue('count');
  }
  getUnseenOrder(id) {
    id = localStorage.getItem('id');
    this.dataService.getUnseenOrder(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        localStorage.setItem('count', this.res.result);
      }
    });
  }
    // check localstorage
    readLocalStorageValue(key) {
      this.count = localStorage.getItem(key);
      console.log(this.count);
    }
}
