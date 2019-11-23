import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Request } from 'src/app/shared/interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  model;
  res: any;
  data: any;
  res2: any;
  data2: any;
  id: number;
  requestForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getDetailProduct(this.id);
    });
    this.getProfile();
    this.buildForm();
  }
  // lấy chi tiết sản phẩm
  getDetailProduct(id) {
    this.productService.getDetailProduct(id).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
      }
    });
  }

  buildForm() {
    this.requestForm = this.formBuilder.group({
      quantity: ['', Validators.required],
      proposed_price: ['', Validators.required],
      datetime: ['', Validators.required],
      address: ['', Validators.required],
      telephone: ['', Validators.required]
    });
  }
    // lấy thông tin user
    getProfile() {

      this.dataService.getProfile().subscribe(res2 => {
        this.res2 = res2;
        if (this.res2.success) {
          this.data2 = this.res2.result;
          this.requestForm.controls.address.setValue(this.data2.address);
          this.requestForm.controls.telephone.setValue(this.data2.telephone);
        }
      });
    }
  // them yeu cau dat hang
  addOrder(user, product, quantity, price, datetime, address, telephone ) {
    user = localStorage.getItem('id');
    product = this.data.id;
    quantity  = this.requestForm.get('quantity').value;
    price = this.requestForm.get('proposed_price').value;
    datetime = this.requestForm.get('datetime').value;
    address = this.requestForm.get('address').value;
    telephone = this.requestForm.get('telephone').value;
    this.productService.postRequest(user, product, quantity, price, datetime, address, telephone).subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.router.navigate(['list-order']);
      }
    });
  }
}
