import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-farmer-refusalreason',
  templateUrl: './farmer-refusalreason.component.html',
  styleUrls: ['./farmer-refusalreason.component.scss']
})
export class FarmerRefusalreasonComponent implements OnInit {

  res: any;
  data: any;
  res2: any;
  id: number;
  reasonForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getDetailOrder(this.id);
    });
    this.buildForm();
  }
  // lấy chi tiết order
  getDetailOrder(id) {
    this.dataService.getDetailOrder(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
      }
    });
  }

  buildForm() {
    this.reasonForm = this.formBuilder.group({
      reason: ['', Validators.required],
    });
  }

  submit(user, order, reason) {
    user = localStorage.getItem('id');
    order = this.data.id;
    reason = this.reasonForm.get('reason').value;
    this.dataService.postReason(user, order, reason).subscribe(res2 => {
      this.res2 = res2;
      if (this.res2.success) {
        this.router.navigate(['get-listorder']);
      }
    });
  }

}
