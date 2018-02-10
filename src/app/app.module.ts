import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { FormProduitComponentComponent } from './form-produit-component/form-produit-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    FormProduitComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
