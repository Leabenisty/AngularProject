import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  // public productList: Product[] = [{
  //   name:"",
  //   price:0
  // }];

  // get(): Product[] {
  //   return this.productList 
  // }

  getProductsList(): Observable<Product[]> {
    return this._http.get<Product[]>("https://localhost:7268/api/Products");
  }

  getProductById(id:number): Observable<Product> {
    return this._http.get<Product>("https://localhost:7268/api/Products/"+id);
  }

  addProduct(product: Product): Observable<Product> {
    return this._http.post<Product>("https://localhost:7268/api/Products",product);
  }
  
  updateProduct(id:number, product:Product): Observable<Product>{
    return this._http.put<Product>("https://localhost:7268/api/Products/"+id, product);
  }

  deleteProduct(id:number): Observable<void> {
    return this._http.delete<void>("https://localhost:7268/api/Products/"+id);
  }
}


