import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ConsulteClientComponent } from './consulte-client/consulte-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ListeMedecinsComponent } from './medecin/liste-medecins/liste-medecins.component';
import { ConsulteMedecinComponent } from './medecin/consulte-medecin/consulte-medecin.component';
import { UpdateMedecinComponent } from './medecin/update-medecin/update-medecin.component';
import { CreateMedecinComponent } from './medecin/create-medecin/create-medecin.component';
import { RechercheMedComponent } from './medecin/recherche-med/recherche-med.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ListeClientsComponent,
    CreateClientComponent,
    ConsulteClientComponent,
    UpdateClientComponent,
    ListeMedecinsComponent,
    ConsulteMedecinComponent,
    UpdateMedecinComponent,
    CreateMedecinComponent,
    RechercheMedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
