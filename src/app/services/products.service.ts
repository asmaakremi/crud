import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import {Observable}from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   API_URL = "http://127.0.0.1:8000/api/products/";
 config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};
  constructor(private _http:HttpClient) { }
  addProduct(data :Product):Observable<any> {
    return this._http.post(this.API_URL, data, this.config)
  }
  getProductList():Observable<any> {
    return this._http.post(this.API_URL +'filter', this.config)
  }
  deleteProduct(id :number){
    return this._http.delete(this.API_URL +id,this.config);

  }
  updateProduct(id:number , data :Product):Observable<any> {
    return this._http.put(this.API_URL+id, data, this.config)
  }
}
