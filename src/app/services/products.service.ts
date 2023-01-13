import { map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  allProducts:Array<object> = [];
  httpOptions:any;
  constructor(public http:HttpClient) {
    this.httpOptions = {
      headers : new HttpHeaders({
        'Content-type':'application/json'
      })
    }
  }

  allProductsData(){
    return this.http.get('http://localhost:3000/products').pipe(map((res:any)=>{
      return res ;
    }));
  }

  getProdByID(id:number){
    return this.http.get(`http://localhost:3000/products/${id}`).pipe(map((res:any)=>{
      return res ;
    }))
  }

  addtoCart(prod:object){
    return this.http.post('http://localhost:3000/cartProducts',
                          JSON.stringify(prod),
                          this.httpOptions);
  }


}
