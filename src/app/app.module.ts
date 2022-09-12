import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
import { SearchPharmaComponent } from './search-pharma/search-pharma.component';
import { ButtonPharmaComponent } from './button-pharma/button-pharma.component';
import { CarouselPharmaComponent } from './carousel-pharma/carousel-pharma.component';
import { MedocPharmaComponent } from './medoc-pharma/medoc-pharma.component';
import { GoogleMapsPharmaComponent } from './google-maps-pharma/google-maps-pharma.component';
import { FooterPharmaComponent } from './footer-pharma/footer-pharma.component';
=======
import { InscriptionPharmaComponent } from './inscription-pharma/inscription-pharma.component';
>>>>>>> inscription-pharma

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    SearchPharmaComponent,
    ButtonPharmaComponent,
    CarouselPharmaComponent,
    MedocPharmaComponent,
    GoogleMapsPharmaComponent,
    FooterPharmaComponent,
=======
    InscriptionPharmaComponent,
>>>>>>> inscription-pharma

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
