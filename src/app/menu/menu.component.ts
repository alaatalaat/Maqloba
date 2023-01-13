import { CartService } from './../services/cart.service';
import { ProductsService } from './../services/products.service';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { StoreData } from './../classes/store-data';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Meal } from '../interfaces/meal';
import { elementAt, Subscriber } from 'rxjs';
import { Router } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  constructor(private translate:TranslateService,
              private http:HttpClient,
              private productSer:ProductsService,
              private router:Router,
              private cartSer:CartService) {}
  products : any = [];
  ngOnInit(): void {
    this.getAll();
    this.arr[0].active = true ;

  }

  getAll(){
    this.productSer.allProductsData().subscribe((res:any)=>{
      this.products = res ;
      this.products.forEach((element:any) => {
        element.searchIcon = false ;
        element.count = 1 ;
        element.newPrice = 0 ;
      });
      //console.log(this.products);
    });

  }

  arr = [
    {tabname:'all',active:false},
    {tabname:'mainDishes',active:false},
    {tabname:'sides',active:false},
    {tabname:'appetizers',active:false},
    {tabname:'drinks',active:false},
    {tabname:'sweet',active:false},
    {tabname:'maqlopers',active:false},
  ];


  activeTab(index:number){
    this.arr[index].active = true ;
    for(let i=0;i<this.arr.length;i++){
      if(this.arr[i]!=this.arr[index]){
        this.arr[i].active = false ;
      }
    }
  }

  details:any;
  prodDetails(prod:any){
    prod.like = false;
    this.details = prod ;
    //console.log(this.details);
  }


  increase(){
    this.details.count++ ;

    if(this.details.kind !=='mainDish'){
      const total = this.details.count * this.details.price;
      console.log('Total : ',total);
      this.details.newPrice = total;
      console.log('newPrice = ',this.details.newPrice);
      // this.details.forEach((ele:any) => {
      //   ele.newPrice = total;
      //   console.log('newPrice = ',ele.newPrice);
      // });

    }







    if(this.small.nativeElement.checked==true){
      let total = this.small?.nativeElement.value * this.details.count ;
      this.details.price = total;
    }else if(this.medium?.nativeElement.checked==true){
      let total = this.medium.nativeElement.value * this.details.count ;
      this.details.price = total;
    }else if(this.large.nativeElement.checked==true){
      let total = this.large.nativeElement.value * this.details.count ;
      this.details.price = total;
    }else if(this.family.nativeElement.checked==true){
      let total = this.family.nativeElement.value * this.details.count ;
      this.details.price = total;
    }
  }

  decrease(){
    if(this.details.count>1){
      this.details.count--;
    }


    if(this.small.nativeElement.checked==true){
      let total = this.small.nativeElement.value * this.details.count ;
      this.details.price = total;
    }else if(this.medium.nativeElement.checked==true){
      let total = this.medium.nativeElement.value * this.details.count ;
      this.details.price = total;
    }else if(this.large.nativeElement.checked==true){
      let total = this.large.nativeElement.value * this.details.count ;
      this.details.price = total;
    }else if(this.family.nativeElement.checked==true){
      let total = this.family.nativeElement.value * this.details.count ;
      this.details.price = total;
    }
  }

  @ViewChild('small') small !:ElementRef;
  checkSmall(){
    let total = this.small.nativeElement.value * this.details.count ;
    this.details.price = total;
    //console.log(this.small.nativeElement.checked);

  }

  @ViewChild('medium') medium !: ElementRef;
  checkMedium(){
    let total = this.medium.nativeElement.value * this.details.count ;
    this.details.price = total;
    // console.log(this.medium.nativeElement.checked);
  }

  @ViewChild('large') large !: ElementRef ;
  checkLarge(){
    let total = this.large.nativeElement.value * this.details.count ;
    this.details.price = total;
  }

  @ViewChild('family') family !: ElementRef ;
  checkFamily(){
    let total = this.family.nativeElement.value * this.details.count ;
    this.details.price = total;
  }

  favourite(){
    this.details.like =! this.details.like
    console.log(this.details.like)
  }

  close:boolean=false;
  closeModel(ele:HTMLElement){
    ele.classList.toggle('d-none');
    //console.log(ele.classList);
  }

  cart:any=[]
  addtoCart(prod:object){
    this.cartSer.addtoCart(prod).subscribe((res)=>{
      this.cart =res;
      console.log('add to cart',this.cart);
      console.log('prod',prod);
    });
  }





}

