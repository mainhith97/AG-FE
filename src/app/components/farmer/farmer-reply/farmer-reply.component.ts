import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-farmer-reply',
  templateUrl: './farmer-reply.component.html',
  styleUrls: ['./farmer-reply.component.scss']
})
export class FarmerReplyComponent implements OnInit {

  res: any;
  data: any;
  res2: any;
  id: number;
  replyForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getDetailComment(this.id);
    });
    this.buildForm();
  }
  // lấy chi tiết sản phẩm
  getDetailComment(id) {
    this.dataService.getDetailComment(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
      }
    });
  }

  buildForm() {
    this.replyForm = this.formBuilder.group({
      reply: ['', Validators.required],
    });
  }

  submit(user, comment, reply) {
    user = localStorage.getItem('id');
    comment = this.data.id;
    reply = this.replyForm.get('reply').value;
    this.dataService.postReply(user, comment, reply).subscribe(res2 => {
      this.res2 = res2;
      if (this.res2.success) {
        this.router.navigate(['get-listreply']);
      }
    });
  }

}
