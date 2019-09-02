import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import {SignupService} from '../services/signup.service'
import { HttpErrorResponse } from '@angular/common/http';
import { NgOnChangesFeature } from '@angular/core/src/render3';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 
  roles: String[] =["USER","ADMIN","PM"];
  rolesUsuario=[];
  usuario={};
  mensaje:HttpErrorResponse;
  message_error="";
  signupForm: FormGroup;
  constructor(private fb:FormBuilder, private signUpService:SignupService, private router:Router) { }

  ngOnInit() {
    this.loadForm();
  }

  loadForm(){
    this.signupForm = this.fb.group({
      name: ['',[Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
      username: ['',[Validators.required, Validators.maxLength(20), Validators.minLength(5)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
      repeat_password: [{value:'', disabled: true}],
      roles: this.fb.array(this.roles.map(r=>this.fb.control(false))),

    });
   
    this.onChanges();
  }

  onChanges(){
 
    this.signupForm.get('password').valueChanges.subscribe(value=>{
      console.log(value);
      if(this.signupForm.get('repeat_password').disabled){
        this.signupForm.get('repeat_password').enable();
      }
     
    });

    this.signupForm.get('repeat_password').valueChanges.subscribe(value=>{

      if(value != this.signupForm.get('password').value){
        console.log("No match")
        this.signupForm.controls['repeat_password'].setErrors({'match':false})
        console.log(  this.signupForm.controls['repeat_password'].valid)
        
      }else{
        console.log("match");
        this.signupForm.controls['repeat_password'].clearValidators();
      }
     
    });
  }

  onSubmit(){
    console.log(this.signupForm.value);
    console.log(this.signupForm.get('roles').value)
    if(this.signupForm.valid){
      if(this.signupForm.get('roles').value[0]==true){
        this.rolesUsuario.push("USER")
      }
      if(this.signupForm.get('roles').value[1]==true){
       this.rolesUsuario.push("ADMIN")
     }
      if(this.signupForm.get('roles').value[2]==true){
       this.rolesUsuario.push("PM")
     }
     if(this.rolesUsuario.length==0){
       //If none role is assigned, the default role will be USER
       this.rolesUsuario.push("USER");
     }
       this.usuario={
         name:this.signupForm.value.name,
         username: this.signupForm.value.username,
         email:this.signupForm.value.email,
         password: this.signupForm.value.password,
         roles:this.rolesUsuario
       }
   
       this.signUpService.registraUsuario(this.usuario).subscribe(res=>{
        
         let resP = JSON.parse(JSON.stringify(res));
      
           if(resP.message!=undefined){
            this.router.navigateByUrl("signin");
           }else if(resP.error){
              this.message_error=resP.error;
           }
       });
    }
  
   
    
  }
}
