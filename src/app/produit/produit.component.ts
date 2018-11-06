
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../shared/produit';
import { ProductService } from './product.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  produitform: FormGroup;
  operation:string='add';
  selectedproduit:Produit;

  constructor(private productservice: ProductService, private fb: FormBuilder,private route:ActivatedRoute) {
    this.createForm();
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
  addProduit() {
    const p = this.produitform.value;
    this.productservice.addProduit(p).subscribe(
      data => {
        this.initialiserproduit();
       // this.loadproduits();
        this.produits=this.route.snapshot.data.produits;
      },
      err => { console.log('An error has occured') },
      () => { console.log('adding product was done') }
    );
  }

  loadproduits() {
    this.productservice.getproduits().subscribe(
      data => { this.produits = data },
      error => { console.log('An erroor was occured') },
      () => { console.log('Loading product was done') }

    );
  }
  updateProduit() {
    console.log("prix ==="+this.selectedproduit.prix);
    
    this.productservice.updateProduit(this.selectedproduit).subscribe(
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
    this.productservice.deleteProduit(this.selectedproduit.id).subscribe(
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
 

  initialiserproduit() {
    this.selectedproduit = new Produit();
    this.createForm();
  }
}
