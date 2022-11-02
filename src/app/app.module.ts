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
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddMComponent } from './add-m/add-m.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ListMedocComponent } from './list-medoc/list-medoc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ShowImageComponent } from './show-image/show-image.component';
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
    ListPanierComponent,
    AddMComponent,
    ListMedocComponent,
    ShowImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePagePharmaRoutingModule,
    HomePagePharmaModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CommonModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
