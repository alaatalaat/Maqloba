import { HttpClient } from '@angular/common/http';
import { CartService } from './../services/cart.service';
import {NgForm,NgModel,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartSer:CartService,private http:HttpClient,
              private prodSer:ProductsService) { }


  ngOnInit(): void {
    this.getAllInCart();

  }

  cartProducts:any = [];

  getAllInCart(){
    this.cartSer.getAllCartProd().subscribe((res:any)=>{
      this.cartProducts=res;
    });
  }





  status:string=''
  save(ID:number,prod:object){
    this.cartSer.update(ID,{
      mealName : this.name,
      price: this.price,
      mealImg: this.img,
      kind : this.kind ,
      count : this.count,
      mealDescription : this.des
    }).subscribe(()=>this.status='updated');
    this.boxModel =! this.boxModel ;

    //this.prodSer.getProdByID(ID).forEach(el=>{console.log(el.price)})

  }


  boxModel:boolean=false;
  id:number=0
  name:string='';
  des:string='';
  img:string='';
  price:number=0;
  kind:string='';
  count:number=0;
  obj:object = {}

  update(prod:any){
    this.id = prod.id;
    this.name = prod.mealName ;
    this.des = prod.mealDescription ;
    this.img = prod.mealImg ;
    this.price = prod.price ;
    this.kind = prod.kind ;
    this.count = prod.count ;
    this.obj = prod;

    console.log('obj',this.obj);
    this.boxModel =! this.boxModel ;
  }


  text:string=''
  remove(prodId:number){
    // this.cartSer.delete(prodId);
    this.http.delete(`http://localhost:3000/cartProducts/${prodId}`)
    .subscribe(()=>{
      this.text='deleted';
      console.log(this.text);
    });

  }


}
