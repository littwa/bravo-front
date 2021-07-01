import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AndPoint } from "../constants/and-points.api"

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  urlApi = environment.urlApi

  constructor(private http: HttpClient) { }

  public getAllCustomers(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${AndPoint.customers.getAllCustomers}`)
  }

  public addCustomer(product): Observable<any> {
    return this.http.post<any>(`${this.urlApi}${AndPoint.customers.addCustomers}`, product)
  }

  public updateCustomer(product): Observable<any> {
    return this.http.patch<any>(`${this.urlApi}${AndPoint.customers.patchCustomers}${product.id}`, product.payload)
  }

  // public delCustomers(product): Observable<any> {
  //   return this.http.delete<any>(`${this.urlApi}${AndPoint.customers.delCustomers}${product.id}`)
  // }

}
