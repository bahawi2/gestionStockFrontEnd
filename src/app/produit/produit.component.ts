import { Component, OnInit } from '@angular/core';
import {ProductMockService} from '../Services/product-mock.service';
import {Produit} from '../shared/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
   produits:Produit[]=[];

  constructor(private produitmockservice:ProductMockService) { }

  ngOnInit() {
    this.produits=this.produitmockservice.getProduits();
  }

}
