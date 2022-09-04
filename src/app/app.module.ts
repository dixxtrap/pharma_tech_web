import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SearchPharmaComponent } from './search-pharma/search-pharma.component';
import { ButtonPharmaComponent } from './button-pharma/button-pharma.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPharmaComponent,
    ButtonPharmaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
