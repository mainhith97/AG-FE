import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.scss']
})
export class ActivateUserComponent implements OnInit {

  res: any;
  data: any;
  res2: any;
  check: boolean;
  constructor(
    private dataService: DataService,
    private confirmationDialogService: ConfirmationDialogService
  ) { }

  ngOnInit() {
    this.getBannedUser();
  }
  getBannedUser() {

    this.dataService.getBannedUser().subscribe(res => {
      this.res = res;
      this.check = false;
      if (this.res.success) {
        if (this.res.result.length !== 0) {
          this.check = true;
        }
        this.data = this.res.result;
      }
    });
  }
  // xoá user
  activate(id: any) {
    this.confirmationDialogService.confirm('Please confirm', 'Do you want to activate this user?')
      .then(() =>
        this.dataService.activateUser(id).subscribe(res2 => {
          this.res2 = res2;
          if (this.res2.success) {
            this.getBannedUser();
          }
        }));
  }

}
