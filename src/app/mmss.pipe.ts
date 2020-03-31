import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mmss'
})
export class MmssPipe implements PipeTransform {

  minuti:number;
  secondi:number;
  contoRovescia:string;

  transform(attesa: number, ...args: any): unknown {
    this.minuti = Math.floor(attesa/60000);
    this.secondi = Math.floor((attesa-this.minuti*60000)/1000);
    this.contoRovescia = this.dueCifre(this.minuti, '0',2)+':'+this.dueCifre(this.secondi, '0', 2);
    return this.contoRovescia;
  }

  dueCifre(numero:number, zero:string, lenght:number){
    return (new Array(lenght+1).join(zero)+numero).slice(-lenght);
  }

}
