import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

import {SignupService} from '../services/signup.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  roles:any=[ {role:'USER'},{role: 'ADMIN'}, {role:'PM'}];
  rolesUsuario=[];
  usuario={};
  mensaje:HttpErrorResponse;
  constructor( private signUpService:SignupService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
   if(form.value.USER==true){
     this.rolesUsuario.push("USER")
   }
   if(form.value.ADMIN==true){
    this.rolesUsuario.push("ADMIN")
  }
  if(form.value.PM==true){
    this.rolesUsuario.push("PM")
  }
    this.usuario={
      name:form.value.name,
      username: form.value.username,
      email:form.value.email,
      password: form.value.password,
      roles:this.rolesUsuario
    }

    this.signUpService.registraUsuario(this.usuario).subscribe(res=>{
      //console.log(res);
      
    });
    console.log(this.usuario);
    this.rolesUsuario=[];
   // console.log(this.rolesUsuario)
    //console.log(this.mensaje);
    
  }
}
