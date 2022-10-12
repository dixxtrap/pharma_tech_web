import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePagePharmaRoutingModule } from './home-page-pharma-routing.module';
import { MedocDetailPharmaComponent } from './components/medoc-detail-pharma/medoc-detail-pharma.component';
import { MedocPharmaComponent } from './components/medoc-pharma/medoc-pharma.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MedocDetailPharmaComponent,
    MedocPharmaComponent,
    
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
  ],
  bootstrap: []
})
export class HomePagePharmaModule { }
