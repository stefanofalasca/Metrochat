import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-tastiera',
  templateUrl: './tastiera.component.html',
  styleUrls: ['./tastiera.component.css']
})
export class TastieraComponent implements OnInit {

  eventiTastiera:Array<Event>;

  constructor() { 
    this.eventiTastiera=[];
  }

  checkTasto(event:KeyboardEvent){
    this.eventiTastiera.push(event);
  }

  ngOnInit(): void {
  }

}
