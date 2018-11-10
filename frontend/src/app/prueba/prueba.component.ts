import { Component, OnInit } from '@angular/core';
import {PruebaService} from '../services/prueba.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor(private pruebaService:PruebaService) { }
  mensaje:any;
  ngOnInit() {
   
    this.pruebaService.obtenPrueba(localStorage.getItem('token').slice(1,-1)).subscribe(res=>{
      console.log(res);
      this.mensaje=res;
    });
  }

}
