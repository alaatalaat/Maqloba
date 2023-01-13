import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  httpOptions:any;
  constructor(private http:HttpClient) {
    this.httpOptions = {
      headers : new HttpHeaders({
        'Content-type':'application/json'
      })
    }
  }

  isEmpty = false ;
  getAllCartProd(){
    return this.http.get('http://localhost:3000/cartProducts').pipe(map((res:any)=>{
      return res ;
    }));
  }

  addtoCart(prod:object){
    return this.http.post('http://localhost:3000/cartProducts',
                          JSON.stringify(prod),
                          this.httpOptions);
  }

  delete(prodId:number){
    this.http.delete(`http://localhost:3000/cartProducts/${prodId}`);
    console.log('de');
  }



  update(ID:number,prod:object){
    return this.http.put(`http://localhost:3000/cartProducts/${ID}`,prod);
  }


}
