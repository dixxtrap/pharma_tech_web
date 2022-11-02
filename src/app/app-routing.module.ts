import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMComponent } from './add-m/add-m.component';
import { InscriptionPharmaComponent } from './inscription-pharma/inscription-pharma.component';
import { ListMedocComponent } from './list-medoc/list-medoc.component';
import { ListPanierComponent } from './list-panier/list-panier.component';

import { LoginComponent } from './login/login.component';
import { ShowImageComponent } from './show-image/show-image.component';

const routes: Routes = [
    { path: 'auth' ,
        children:
        [
          { path: 'inscription-pharma' , component: InscriptionPharmaComponent},
          { path: 'login' , component: LoginComponent},
        ]
    },
    { path: 'add-m',          component: AddMComponent },
    { path: 'show-image',          component: ShowImageComponent },
    { path: 'list-medoc',          component: ListMedocComponent },
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
