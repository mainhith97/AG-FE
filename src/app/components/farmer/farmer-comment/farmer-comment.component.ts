import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-farmer-comment',
  templateUrl: './farmer-comment.component.html',
  styleUrls: ['./farmer-comment.component.scss']
})
export class FarmerCommentComponent implements OnInit {

  res: any;
  data: any;
  id: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getListComment(this.id);
  }
  // list cmt
  getListComment(id) {
    id = localStorage.getItem('id');
    this.dataService.getListComment(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result;
      }
    });
  }

}
