import { Injectable } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URLS } from '../config/api.url.export';
import { Produit } from '../shared/produit';

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) {

   }
   getproduits():Observable<any>{
     return this.http.get(API_URLS.PROUDUITS_URL);
   }
   addProduit(p :Produit):Observable<any>{
    return this.http.post(API_URLS.PROUDUITS_URL,p);
  }
  updateProduit(p1 :Produit):Observable<any>{
    console.log("prix ==="+p1.prix);
    return this.http.put(API_URLS.PROUDUITS_URL,p1);
  }
  deleteProduit(id:number):Observable<any>{
    return this.http.delete("http://localhost:8080/api/produit/"+id);
  }

}
