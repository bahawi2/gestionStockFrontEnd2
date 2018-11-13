import {Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductService } from './product.service';

@Injectable()
export class ProduitResolver implements Resolve<any>{

  constructor(private productservice:ProductService){

  }
  resolve(){
    return this.productservice.getAll();
  }
}