import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import {ProduitService} from '../Services/produit.service';


@Injectable()
export class ProduitResolver implements Resolve<any>{
  constructor (private produitservice:ProduitService)
  {

  }

  resolve() {
    return this.produitservice.getProduits();
  }

}
