import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionPharmaComponent } from './inscription-pharma/inscription-pharma.component';

const routes: Routes = [
  { path: 'inscription' , component: InscriptionPharmaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
