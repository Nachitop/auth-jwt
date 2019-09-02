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

  auth:Auth= new Auth(false,"","");
  message_error: string="";
  constructor(private signinService:SigninService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){

   this.signinService.ingresa(form.value).subscribe(res=>{
    let resP = JSON.parse(JSON.stringify(res));

      this.auth= resP as Auth;
      if(this.auth.auth==true){
       
       localStorage.setItem('token', JSON.stringify(this.auth.accessToken));
       console.log( localStorage.getItem('token'))
       this.router.navigateByUrl("prueba");
      }
      else{
        this.message_error=this.auth.reason;
      }

     
 
   
    
    
   });
  }
}
