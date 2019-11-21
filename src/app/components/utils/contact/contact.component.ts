import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  res: any;
  data: any;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getListSupplier();
  }

  getListSupplier() {

    this.dataService.getListSupplier().subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result;
      }
    });
  }

}
