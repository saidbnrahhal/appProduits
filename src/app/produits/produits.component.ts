import { Component, OnInit } from '@angular/core';
import { Produit } from './produit';
import {TabProduits} from './mock-produits'

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produit: Produit = null;
  produits: Produit[]=TabProduits;

  constructor() { }

  ngOnInit() {
  }

  choixProduit(pdt){
    this.produit = pdt;
  }

}
