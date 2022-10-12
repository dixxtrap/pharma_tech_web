import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonPharmaComponent } from './button-pharma/button-pharma.component';
import { GoogleMapsPharmaComponent } from './google-maps-pharma/google-maps-pharma.component';
import { HeaderComponent } from './header/header.component';
import { FooterPharmaComponent } from './footer-pharma/footer-pharma.component';
import { HomePagePharmaRoutingModule } from './home-page-pharma/home-page-pharma-routing.module';
import { HomePagePharmaComponent } from './home-page-pharma/home-page-pharma.component';
import { LoginComponent } from './login/login.component';
import { SearchPharmaComponent } from './search-pharma/search-pharma.component';
import { CarouselPharmaComponent } from './carousel-pharma/carousel-pharma.component';
import { HomePagePharmaModule } from './home-page-pharma/home-page-pharma.module';
import { ListPanierComponent } from './list-panier/list-panier.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePagePharmaComponent,
    HeaderComponent,
    SearchPharmaComponent,
    ButtonPharmaComponent,
    CarouselPharmaComponent,
    GoogleMapsPharmaComponent,
    FooterPharmaComponent,
    ListPanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePagePharmaRoutingModule,
    HomePagePharmaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
