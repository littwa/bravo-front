import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AndPoint } from "../constants/and-points.api"

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  urlApi = environment.urlApi

  constructor(private http: HttpClient) { }

  public getAllOrders(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${AndPoint.orders.getAllOrders}`)
  }

  public getAllOrdersAggregateProducts(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${AndPoint.orders.getAllOrdersAggregate}`)
  }

  public confirmOrdersStatus(order): Observable<any> {
    return this.http.patch<any>(`${this.urlApi}${AndPoint.orders.confirmOrderStatus}${order.id}`, order.payload)
  }

  public addOrder(order): Observable<any> {
    return this.http.post<any>(`${this.urlApi}${AndPoint.orders.addOrder}`, order)
  }

  public updateOrder(order): Observable<any> {
    return this.http.patch<any>(`${this.urlApi}${AndPoint.orders.updateOrder}${order.id}`, order.payload)
  }
}

