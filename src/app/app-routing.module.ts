import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ConsulteClientComponent } from './consulte-client/consulte-client.component';
import { ListeMedecinsComponent } from './medecin/liste-medecins/liste-medecins.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ConsulteMedecinComponent } from './medecin/consulte-medecin/consulte-medecin.component';
import { UpdateMedecinComponent } from './medecin/update-medecin/update-medecin.component';
import { CreateMedecinComponent } from './medecin/create-medecin/create-medecin.component';
import { RechercheMedComponent } from './medecin/recherche-med/recherche-med.component';





const routes: Routes = [


{path:'register', component:RegisterComponent},
{path:'login', component:LoginComponent},
{path:'client-list', component:ListeClientsComponent},
{path:'add-client', component: CreateClientComponent},
{path:'consulte-client/:id', component:ConsulteClientComponent},
{path:'update-client/:id', component: UpdateClientComponent},
{path:'medecin-list', component: ListeMedecinsComponent},
{path:'consulte-medecin/:id', component:ConsulteMedecinComponent},
{path:'update-medecin/:id', component: UpdateMedecinComponent},
{path:'add-medecin', component: CreateMedecinComponent},
{path:'spec-list', component: RechercheMedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
