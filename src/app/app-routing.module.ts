import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreniComponent } from './treni/treni.component';
import { PreferitiComponent } from './preferiti/preferiti.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'inarrivo', component:TreniComponent},
  {path:'preferiti', component:PreferitiComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'inarrivo', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
