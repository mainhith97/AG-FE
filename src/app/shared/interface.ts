export interface ILogin {
  username: string;
  password: string;
}
export interface IRegister {
  username: string;
  password: string;
  name: string;
  company_name: string;
  email: string;
  address: string;
  telephone: number;
  role: string;
}
export class User {
  id: number;
  username: string;
  password: string;
  name: string;
  // tslint:disable-next-line: variable-name
  company_name: string;
  email: string;
  address: string;
  telephone: number;
  description: string;
  token?: string;
}
export interface ISearch {
  keyword: string;
}
export interface Product {
    id: number;
    name: string;
    provider_id: any;
    unit: string;
    price_per_unit: number;
    in_stock: number;
    type: any;
    description: string;
    verify: string;
    detail: string;
    image: File;
    quantity: number;
    total: number;
    product_value: any;
    active: boolean;
}
export interface ProductDisplay {
    Products: Product[];
}
export interface IAlert {
  id: number;
  type: string;
  message: string;
}
export interface Request {
  quantity: number;
  price: number;
  date: any;
}
export interface Profile {
  username: string;
  name: string;
  // tslint:disable-next-line: variable-name
  company_name: string;
  email: string;
  address: string;
  telephone: number;
  description: string;
}
export interface Category {
  product_type: string;
}
export interface Email {
  email: string;
}
export interface Password {
  password: string;
  token: string;
}
export interface UpdatePass {
  oldpassword: string;
  newpassword: string;
  confirmpassword: string;
}
