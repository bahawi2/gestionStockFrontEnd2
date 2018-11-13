import { Injectable } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URLS } from '../config/api.url.export';
import { Produit } from '../shared/produit';
import { CrudService } from '../shared/crud.service';

@Injectable()
export class ProductService implements CrudService {

  constructor(private http:HttpClient) {

   }
   getAll():Observable<any>{
    return this.http.get(API_URLS.PROUDUITS_URL);
  }
   getproduits():Observable<any>{
     return this.http.get(API_URLS.PROUDUITS_URL);
   }
   add(p :Produit):Observable<any>{
    return this.http.post(API_URLS.PROUDUITS_URL,p);
  }
  update(p1 :Produit):Observable<any>{
    return this.http.put(API_URLS.PROUDUITS_URL,p1);
  }
  delete(id:number):Observable<any>{
    return this.http.delete("http://localhost:8080/api/produit/"+id);
  }
  addAll(list): Observable<any>{
    return this.http.post(API_URLS.PROUDUITS_URL + '/all', list);
  }

}
