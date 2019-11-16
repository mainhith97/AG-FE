import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Email } from 'src/app/shared/interface';

@Component({
  selector: 'app-enter-email',
  templateUrl: './enter-email.component.html',
  styleUrls: ['./enter-email.component.scss']
})
export class EnterEmailComponent implements OnInit {

  emailForm: FormGroup;
  res: any;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.emailForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }
  submit({ value }: { value: Email }) {
    return this.dataService.postEmail(value).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.router.navigate(['check-email']);
      }
    });
  }

}
