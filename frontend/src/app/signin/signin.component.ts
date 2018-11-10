import { Component, OnInit } from '@angular/core';
import {SigninService} from '../services/signin.service';
import { NgForm } from '@angular/forms';
import { Auth } from '../models/auth.model';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  auth:Auth
  constructor(private signinService:SigninService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){

   this.signinService.ingresa(form.value).subscribe(res=>{
     console.log(res);
    
     this.auth= res as Auth;
     if(this.auth.auth==true){
      
      localStorage.setItem('token', JSON.stringify(this.auth.accessToken));
      console.log( localStorage.getItem('token'))
      this.router.navigateByUrl("prueba");
     }
     else{
       console.log("Usuario o contraseña no válido");
     }
    
   });
  }
}
