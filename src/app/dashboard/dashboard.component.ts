import { Component, OnInit } from '@angular/core';
import { Produit } from '../produits/produit';
import { ProduitServiceService } from '../produit-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  produits:Produit[];
  produit:Produit=null;

  constructor(private ptdService :ProduitServiceService) { }

  ngOnInit() {
    this.ptdService.getProduits().subscribe(pdts=>this.produits =pdts.slice(1,5));
  }

}
