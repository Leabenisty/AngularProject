import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../Models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  
 constructor(private _http: HttpClient) { }
  
  // public orderList: Order[] = [{
  //   customerId: 0,
  //   detailsOrder: {productId:0 ,quantity:0}
  // }];

  // get(): Order[] {
  //   return this.orderList 
  // }

  getOrdersList(): Observable<Order[]> {
    return this._http.get<Order[]>("https://localhost:7268/api/Orders");
  }

  getOrderById(id:number): Observable<Order> {
    return this._http.get<Order>("https://localhost:7268/api/Orders/"+id);
  }

  addOrder(order: Order): Observable<Order> {
    return this._http.post<Order>("https://localhost:7268/api/Orders",order);
  }
  
  updateOrder(id:number, order:Order): Observable<Order>{
    return this._http.put<Order>("https://localhost:7268/api/Orders/"+id,order);
  }

  deleteOrder(id:number): Observable<void>{  
    return this._http.delete<void>("https://localhost:7268/api/Orders/"+id);
  }
}

