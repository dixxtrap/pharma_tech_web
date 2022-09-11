import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { InscriptionPharmaComponent } from './inscription-pharma/inscription-pharma.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InscriptionPharmaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
