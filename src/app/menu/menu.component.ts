import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  linkMenu1 : string;
  linkMenu2 : string;
  linkMenu3 : string;

  constructor() { 
    this.linkMenu1 = "Treni";
    this.linkMenu2 = "Preferiti";
    this.linkMenu3 = "Login";
  }

  ngOnInit(): void {
    // definisco qui le azioni da fare
    
  }
  
  


}
