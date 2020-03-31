import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TreniComponent } from './treni/treni.component';
import { MmssPipe } from './mmss.pipe';
import { NotizieComponentComponent } from './notizie-component/notizie-component.component';
import { TastieraComponent } from './tastiera/tastiera.component';
import { MetroComponent } from './metro/metro.component';
import { DettaglioTrenoComponent } from './treni/dettaglio-treno/dettaglio-treno.component';
import { PreferitiComponent } from './preferiti/preferiti.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TreniComponent,
    MmssPipe,
    NotizieComponentComponent,
    TastieraComponent,
    MetroComponent,
    DettaglioTrenoComponent,
    PreferitiComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
