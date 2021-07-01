import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AndPoint } from "../constants/and-points.api"

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  urlApi = environment.urlApi

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${AndPoint.catalog.getAllProducts}`)
  }

  public addProduct(product): Observable<any> {
    return this.http.post<any>(`${this.urlApi}${AndPoint.catalog.addProduct}`, product)
  }

  public updateProduct(product): Observable<any> {
    return this.http.patch<any>(`${this.urlApi}${AndPoint.catalog.patchProduct}${product.id}`, product.payload)
  }

  public delProduct(product): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}${AndPoint.catalog.delProduct}${product.id}`)
  }

}
