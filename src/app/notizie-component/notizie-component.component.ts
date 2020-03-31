import { News } from './../model/news.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-listanews',
  templateUrl: './notizie-component.component.html',
  styleUrls: ['./notizie-component.component.css']
})
export class NotizieComponentComponent implements OnInit {

  listanews:News[] = [];

  constructor() {
    this.listanews = [
      {id:1, titolo:'Titolo notizia 1', descrizione:'descrizione notizia 1'}
    ]
    
   }

  ngOnInit(): void {
  }

  dettaglio(id:number){
    alert("ID notizia:"+id);
  }

}
