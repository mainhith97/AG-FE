import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-get-listuser',
  templateUrl: './get-listuser.component.html',
  styleUrls: ['./get-listuser.component.scss']
})
export class GetListuserComponent implements OnInit {
res: any;
data: any;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getListUser();
  }
  getListUser() {

    this.dataService.getListUser().subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result;
      }
    });
  }
}
