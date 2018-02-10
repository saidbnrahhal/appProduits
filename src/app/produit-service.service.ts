import { Injectable } from '@angular/core';
import { Produit } from './produits/produit';
import { TabProduits } from './produits/mock-produits';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of'
@Injectable()
export class ProduitServiceService {

  constructor() { }

  getProduits() : Observable<Produit[]> {
    return of(TabProduits);
  }

}
