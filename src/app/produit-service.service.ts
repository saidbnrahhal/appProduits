import { Injectable } from '@angular/core';
import { Produit } from './produits/produit';
import { TabProduits } from './produits/mock-produits';

@Injectable()
export class ProduitServiceService {

  constructor() { }

  getProduits() : Produit[] {
    return TabProduits;
  }

}
