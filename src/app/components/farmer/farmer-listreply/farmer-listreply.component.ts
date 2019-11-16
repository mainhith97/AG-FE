import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-farmer-listreply',
  templateUrl: './farmer-listreply.component.html',
  styleUrls: ['./farmer-listreply.component.scss']
})
export class FarmerListreplyComponent implements OnInit {
  res2: any;
  res: any;
  data: any;
  id: any;
  constructor(private dataService: DataService,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getListReply(this.id);
  }
  // list reply
  getListReply(id) {
    id = localStorage.getItem('id');
    this.dataService.getListReply(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
      }
    });
  }
  // xoá reply
  remove(id: any) {
    this.confirmationDialogService.confirm('Please confirm', 'Do you want to delete this reply?')
      .then(() =>
        this.dataService.removeReply(id).subscribe(res2 => {
          this.res2 = res2;
          if (this.res2.success) {
            this.getListReply(this.id);
          }
        }));
  }
}
