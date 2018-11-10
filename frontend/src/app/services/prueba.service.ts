import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  readonly URL_API="http://localhost:8080/api/test/admin";
  constructor(private http:HttpClient) { }
 
  obtenPrueba(token:any){
   return this.http.get(this.URL_API,{headers:{"x-access-token":token}});
  }
 
}
