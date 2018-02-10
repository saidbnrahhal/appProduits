import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { FormProduitComponentComponent } from './form-produit-component/form-produit-component.component';
import { ProduitServiceService } from './produit-service.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    FormProduitComponentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule
  ],
  providers: [ProduitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
