import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { FormProduitComponentComponent } from './form-produit-component/form-produit-component.component';
import { ProduitServiceService } from './produit-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    FormProduitComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [ProduitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
