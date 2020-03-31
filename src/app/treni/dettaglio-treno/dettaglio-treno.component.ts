import { Metro } from './../../model/metro.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ca-dettaglio-treno',
  templateUrl: './dettaglio-treno.component.html',
  styleUrls: ['./dettaglio-treno.component.css']
})
export class DettaglioTrenoComponent implements OnInit {

  @Input() treno:Metro;
  constructor() { }

  ngOnInit(): void {
  }

  chiudi(){    
    this.treno=null;
  }

}
