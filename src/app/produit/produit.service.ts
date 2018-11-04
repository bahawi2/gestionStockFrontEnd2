import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';

@Injectable()
export class ProduitService {

    PRODUITS: Produit[]=[];
  constructor() { 
    let p1= new Produit('livre',234,50);
    let p2= new Produit('cahier',300,12.65);
    let p3= new Produit('cartable',500,120);
    let p4= new Produit('stylo',321,5);
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
    this.PRODUITS.push(p4);
  }
  public getProduits():Produit[]{
    return this.PRODUITS;
  }

}
