import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators} from '@angular/forms';
import {Produit} from '../shared/produit';
import {ProduitService} from '../Services/produit.service';
import {ActivatedRoute} from '@angular/router';

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
              private fb:FormBuilder , private route : ActivatedRoute) {

  }
  createForm(){
    this.produitform=this.fb.group({
      ref : ['',Validators.required],
      quantite: '',
      prix: ''
    });
  }

  ngOnInit() {

   this.initialiserproduit();
    this.produits= this.route.snapshot.data.produits;

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
    this.produitservice.deleteProduit(this.selectedproduit.id).subscribe(
      data => {
        this.loadproduits();
        this.selectedproduit=new Produit();
      },
      err => {
        console.log(' deleting An error has occured')
      },
      () => {
        console.log('Deleting product was done')
      }
    );
  }
  loadproduits() {
    this.produitservice.getProduits().subscribe(
      data=>{this.produits=data},
      err=>{console.log('An error has occured')}
    );
  }
  initialiserproduit() {
    this.selectedproduit=new Produit();
    this.createForm();
  }

}
