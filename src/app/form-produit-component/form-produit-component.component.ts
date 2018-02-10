import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../produits/produit';

@Component({
  selector: 'app-form-produit',
  templateUrl: './form-produit-component.component.html',
  styleUrls: ['./form-produit-component.component.css']
})
export class FormProduitComponentComponent implements OnInit {

  @Input()
  produitSelect : Produit;
  constructor() { }

  ngOnInit() {
  }

}
