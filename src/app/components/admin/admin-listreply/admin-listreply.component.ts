import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-admin-listreply',
  templateUrl: './admin-listreply.component.html',
  styleUrls: ['./admin-listreply.component.scss']
})
export class AdminListreplyComponent implements OnInit {

  res: any;
  res2: any;
  data: any;
  constructor(private dataService: DataService,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getReply();
  }
  // list reply
  getReply() {
    this.dataService.getReply().subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result;
      }
    });
  }
  // xoá cmt
  remove(id: any) {
    this.confirmationDialogService.confirm('Please confirm', 'Do you want to delete this reply?')
    .then(() =>
      this.dataService.removeReply(id).subscribe(res2 => {
        this.res2 = res2;
        if (this.res2.success) {
          this.getReply();
        }
      }));
    }

}
