import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionPharmaComponent } from './inscription-pharma/inscription-pharma.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
    
    { path: 'inscription' , component: InscriptionPharmaComponent},
    { path: 'login' , component: LoginComponent},



];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
