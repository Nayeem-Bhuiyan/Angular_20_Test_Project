import { Component, Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductListResponse } from '../../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class ListProductService {
   private http=inject(HttpClient)

   get_products(page_size?:number,skip_page?:number): Observable<ProductListResponse> {
   
    const data=this.http.get<ProductListResponse>(`https://dummyjson.com/products?limit=${page_size}&skip=${skip_page}`);
    //console.log(data);
     return data;
   }
   
}