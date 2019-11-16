import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-admin-comment',
  templateUrl: './admin-comment.component.html',
  styleUrls: ['./admin-comment.component.scss']
})
export class AdminCommentComponent implements OnInit {

  res: any;
  res2: any;
  data: any;
  constructor(private dataService: DataService,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getComment();
  }
  // list cmt
  getComment() {
    this.dataService.getComment().subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result;
      }
    });
  }
  // xoá cmt
  remove(id: any) {
    this.confirmationDialogService.confirm('Please confirm', 'Do you want to delete this comment?')
    .then(() =>
      this.dataService.removeCmt(id).subscribe(res2 => {
        this.res2 = res2;
        if (this.res2.success) {
          this.getComment();
        }
      }));
    }

}
