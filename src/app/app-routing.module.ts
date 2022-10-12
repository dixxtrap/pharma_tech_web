import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionPharmaComponent } from './inscription-pharma/inscription-pharma.component';
import { ListPanierComponent } from './list-panier/list-panier.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'auth' ,
        children:
        [
          { path: 'inscription' , component: InscriptionPharmaComponent},
          { path: 'login' , component: LoginComponent},
        ]
    },
    { path: 'panier' ,
        children:
        [
          { path: 'list-panier' , component: ListPanierComponent}, 
        ]
    }

];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
