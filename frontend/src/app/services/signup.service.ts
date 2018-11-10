import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  readonly URL_API="http://localhost:8080/api/auth/signup"
  constructor(private http:HttpClient) { }

  registraUsuario(usuario:any){
    console.log(usuario);
    return this.http.post(this.URL_API,usuario);
  }
}
