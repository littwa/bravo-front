import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AndPoint } from "../constants/and-points.api"

interface Manager { email: string }

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  urlApi = environment.urlApi

  constructor(private http: HttpClient) { }

  public logInManger(manager: Manager): Observable<any> {

    return this.http.post<any>(`${this.urlApi}${AndPoint.auth.logInManger}`, manager)
  }

  public verifyManger(code: string): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${AndPoint.auth.verifyManger}${code}`)
  }

  public getCurrentManger(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${AndPoint.auth.getCurrentManger}`);
  }


  // public checkValidToken() {
//   const token = localStorage.getItem(TOKEN);
//   if (token) {
//     return this.http.post(`${this.apiUrl}${ApiConstants.auth.verifyToken}`, { token });
//   }
//   return of(false);
// }







}
