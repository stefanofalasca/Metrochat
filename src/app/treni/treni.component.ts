import { LISTAMETRO, LISTAMSG } from './../dati/metroremoti';
import { Metro } from './../model/metro.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ca-treni',
  templateUrl: './treni.component.html',
  styleUrls: ['./treni.component.css']
})
export class TreniComponent implements OnInit {
  listaTreni:Metro[];
  trenoSelezionato:Metro;
  now:number;
  treniPartiti:string;

  constructor() { 
    this.listaTreni = [];
    this.treniPartiti = "";
    this.now = new Date().getTime();
  }

  ngOnInit(): void {
    this.listaTreni = LISTAMETRO;
  }

  setMetro(metro:Metro){
    this.trenoSelezionato = metro;
  }

  partiti(id:number){
    this.treniPartiti += "|"+id;
  }

}
