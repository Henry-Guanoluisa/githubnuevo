import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/pie/footer.component';
import { TiendaComponent } from './Components/tienda/tienda.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { AdminComponent } from './Components/admin/admin.component';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {PaginatorModule} from "primeng/paginator";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    TiendaComponent,
    ContactoComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
