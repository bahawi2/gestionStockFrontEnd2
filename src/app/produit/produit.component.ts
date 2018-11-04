
import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from './produit.service';
import { Produit } from '../shared/produit';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

    produits: Produit[];
    produitform: FormGroup;
  constructor(private produitservice:ProduitService,private fb:FormBuilder) {
    this.produitform = this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prixUnitaire: ''
    });
   }

  ngOnInit() {
    this.produits=this.produitservice.getProduits();
  }

}
