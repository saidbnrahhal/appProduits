import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../produits/produit';
import { ProduitServiceService } from '../produit-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-produit',
  templateUrl: './form-produit-component.component.html',
  styleUrls: ['./form-produit-component.component.css']
})
export class FormProduitComponentComponent implements OnInit {

  @Input()
  produitSelect : Produit;
  constructor(
    private route: ActivatedRoute,
    private ptdService :ProduitServiceService,
    private location : Location) { }


  ngOnInit() {
    this.getProduit();
  }

  getProduit():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ptdService.getProduit(id).subscribe(pdt =>this.produitSelect = pdt);
  }

  goBack():void {
    this.location.back();
  }
}
