import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SearchPharmaComponent } from './search-pharma/search-pharma.component';
import { ButtonPharmaComponent } from './button-pharma/button-pharma.component';
import { CarouselPharmaComponent } from './carousel-pharma/carousel-pharma.component';
import { MedocPharmaComponent } from './medoc-pharma/medoc-pharma.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPharmaComponent,
    ButtonPharmaComponent,
    CarouselPharmaComponent,
    MedocPharmaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
