import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePagePharmaRoutingModule } from './home-page-pharma-routing.module';
import { MedocDetailPharmaComponent } from './components/medoc-detail-pharma/medoc-detail-pharma.component';
import { MedocPharmaComponent } from './components/medoc-pharma/medoc-pharma.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ListPanierComponent } from './components/list-panier/list-panier.component';


@NgModule({
  declarations: [
    MedocDetailPharmaComponent,
    MedocPharmaComponent,
    ListPanierComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HomePagePharmaRoutingModule
  ],
  exports: [

    MedocDetailPharmaComponent,
    MedocPharmaComponent,
    ListPanierComponent
  ],
  bootstrap: []
})
export class HomePagePharmaModule { }
