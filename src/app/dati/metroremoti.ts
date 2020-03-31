import { Messaggio } from './../model/messaggio.model';
import { Metro } from './../model/metro.model';

export const LISTAMETRO: Metro[]=[
    {idt:'12345', linea:'Rossa', numpass:12, tempo:new Date().getTime()+1000*60, numchatting:1},
    {idt:'67890', linea:'Verde', numpass:12, tempo:new Date().getTime()+2000*60, numchatting:2},
    {idt:'09876', linea:'Gialla', numpass:12,tempo:new Date().getTime()+3000*60, numchatting:3},
];

export const LISTAMSG: Messaggio[]=[
    {idm:1, idt:'12345', idu:'AAA', testo:'1° messaggio linea rossa', idd:''},
    {idm:2, idt:'67890', idu:'BBB', testo:'2° messaggio linea verde', idd:''},
    {idm:3, idt:'09876', idu:'CCC', testo:'3° messaggio linea gialla', idd:''},
];