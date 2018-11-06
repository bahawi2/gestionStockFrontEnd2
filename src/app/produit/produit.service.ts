import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';

@Injectable()
export class ProduitService2 {

    PRODUITS: Produit[]=[];
  constructor() { 
    let p1= new Produit(1,'livre',234,50);
    let p2= new Produit(2,'cahier',300,12.65);
    let p3= new Produit(3,'cartable',500,120);
    let p4= new Produit(4,'stylo',321,5);
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
    this.PRODUITS.push(p4);
  }
  public getProduits():Produit[]{
    return this.PRODUITS;
  }

}
