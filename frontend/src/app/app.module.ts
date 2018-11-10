import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import  {Routes,RouterModule} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { PruebaComponent } from './prueba/prueba.component'

const routes:Routes=[
  {path:'signin', component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'prueba',component:PruebaComponent},
  {path:'**',component:SigninComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,FormsModule,RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
