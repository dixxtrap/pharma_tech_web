import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedocDetailPharmaComponent } from './home-page-pharma/components/medoc-detail-pharma/medoc-detail-pharma.component';
import { MedocPharmaComponent } from './home-page-pharma/components/medoc-pharma/medoc-pharma.component';
import { HomePagePharmaComponent } from './home-page-pharma/home-page-pharma.component';
import { InscriptionPharmaComponent } from './inscription-pharma/inscription-pharma.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'inscription' , component: InscriptionPharmaComponent},
  { path: 'login' , component: LoginComponent },


];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
