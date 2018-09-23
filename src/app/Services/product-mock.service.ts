import { Injectable } from '@angular/core';
import {Produit} from '../shared/produit';

@Injectable()
export class ProductMockService {
   private produits:Produit[]=[];

  constructor() {
    let p1=new Produit("Livre",50,20);
    let p2=new Produit("Cahier",70,120);
    let p3=new Produit("Stylo",54,30);
    this.produits.push(p1,p2,p3);
  }
  public getProduits():Produit[]
  {
    return this.produits;
  }

}
