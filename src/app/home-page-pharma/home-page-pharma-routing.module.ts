import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionPharmaComponent } from '../inscription-pharma/inscription-pharma.component';
import { LoginComponent } from '../login/login.component';
import { ListPanierComponent } from './components/list-panier/list-panier.component';
import { MedocDetailPharmaComponent } from './components/medoc-detail-pharma/medoc-detail-pharma.component';

import { MedocPharmaComponent } from './components/medoc-pharma/medoc-pharma.component';
import { HomePagePharmaComponent } from './home-page-pharma.component';

const routes: Routes = [
  { path: 'home' , component: HomePagePharmaComponent,
  children:
  [
    { path: 'medicaments' , component: MedocPharmaComponent  },
    { path: 'medicaments/:id' , component: MedocDetailPharmaComponent}, 
    { path: 'panier' , component: ListPanierComponent}, 
    
  ]
},

{ path: '',   redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomePagePharmaRoutingModule {}
