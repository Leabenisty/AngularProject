import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../Models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  
 constructor(private _http: HttpClient) { }
  
  public orderList: Order[] = [{
    customerId: 0,
    products: {name:"",price:0}
  }];

  get(): Order[] {
    return this.orderList 
  }
  getCustomerList(): Observable<Order[]> {

    return this._http.get<Order[]>("https://localhost:7268/api/Products");
  }

  addNewCustomer(order: Order): Observable<Order> {

    return this._http.post<Order>("https://localhost:7268/api/Products",order);
  }
  
  updateCustomer(order:Order): Observable<Order>{

    let index = this.orderList.indexOf(order);
    return this._http.put<Order>("https://localhost:7268/api/Products"+index,order);
  }
  deleteCustomer(order:Order){

    let index = this.orderList.indexOf(order);
    this._http.delete<Order>("https://localhost:7268/api/Products"+index);
  }
}

