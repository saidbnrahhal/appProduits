import { Component, OnInit } from '@angular/core';
import { Produit } from './produit';
import {TabProduits} from './mock-produits'
import { ProduitServiceService } from '../produit-service.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produit: Produit = null;
  produits: Produit[];

  constructor(private pdtService :ProduitServiceService) { }

  ngOnInit() {
    this.pdtService.getProduits().subscribe(pdts =>this.produits =pdts);
  }

  choixProduit(pdt){
    this.produit = pdt;
  }

}
