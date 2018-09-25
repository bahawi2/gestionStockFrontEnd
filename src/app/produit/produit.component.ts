import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators} from '@angular/forms';
import {Produit} from '../shared/produit';
import {ProduitService} from '../Services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
   produits:Produit[]=[];
  produitform:FormGroup;
  operation:string='add';
  selectedproduit:Produit;

  constructor(private produitservice:ProduitService,
              private fb:FormBuilder) {

  }
  createForm(){
    this.produitform=this.fb.group({
      ref : ['',Validators.required],
      quantite: '',
      prix: ''
    });
  }

  ngOnInit() {
    this.loadproduits();
    this.initialiserproduit();

  }
  addProduit(){
    const p=this.produitform.value;
    this.produitservice.addProduit(p).subscribe(
      data=>{
      this.initialiserproduit();
        this.loadproduits();
      },
      err=>{console.log('An error has occured')},
      ()=>{console.log('adding product was done')}
    );
  }
  updateProduit() {

    this.produitservice.updateProduit(this.selectedproduit).subscribe(
      data => {
        this.loadproduits();
        this.initialiserproduit();
      },
      err => {
        console.log('An error has occured')
      },
      () => {
        console.log('Editing product was done')
      }
    );
  }
  delteProduit() {
    const p = this.produitform.value;
    this.produitservice.updateProduit(p).subscribe(
      data => {
        this.loadproduits();
      },
      err => {
        console.log('An error has occured')
      },
      () => {
        console.log('Editing product was done')
      }
    );
  }
  loadproduits()
  {
    this.produitservice.getProduits().subscribe(
      data=>{this.produits=data},
      err=>{console.log('An error has occured')},
      ()=>{console.log('loading produits was done')}
    );
  }
  initialiserproduit()
  {
    this.selectedproduit=new Produit();
    this.createForm();
  }

}
