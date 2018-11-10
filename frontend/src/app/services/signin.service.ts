import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SigninService {
  readonly URL_API="http://localhost:8080/api/auth/signin"
  constructor(private http : HttpClient) { }

  ingresa(usuario:any){
    return this.http.post(this.URL_API,usuario);
  }
}
