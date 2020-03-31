import { Metro } from './../model/metro.model';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'ca-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.css']
})
export class MetroComponent implements OnInit {

  @Input() datiIn:Metro;
  @Input() ora:number;
  @Output() inPartenza:EventEmitter<string> = new EventEmitter();
  
  attesa:number;
  oraPartenza:number;
  stato:Object;

  constructor() { }

  ngOnInit(): void {
    this.oraPartenza = this.datiIn.tempo;
    // tempo mancante alla partenza
    this.attesa = this.oraPartenza;//-this.ora;
    
    let x = setInterval(()=>{
      console.log("ora partenza:"+this.oraPartenza+ " ora:"+this.ora);
      this.attesa -= 1000;
      if (this.attesa<=0){
        // blocco il timer e mando l'evento di uscita
        clearInterval(x);
        // notifico  il cambio di dato passando l'id del treno
        this.inPartenza.emit(this.datiIn.idt);
        //modifico lo stato di visualizzazione del componente
        this.stato = {'display':'none'};
      }
    }, 1000);

  }

}
