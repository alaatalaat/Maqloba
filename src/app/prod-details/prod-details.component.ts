import { ProductsService } from './../services/products.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.scss']
})
export class ProdDetailsComponent implements OnInit {
  prodId:number =0;
  prodDetails:any={};
  constructor(private activatedRout:ActivatedRoute ,
              private location:Location,
              private translate:TranslateService,
              private http:HttpClient,
              private productSer:ProductsService,
              private router:Router,
              private cartSer:CartService) { }

  ngOnInit(): void {
    this.prodId = Number(this.activatedRout.snapshot.paramMap.get('id'));
    console.log(this.prodId);

    this.productSer.getProdByID(this.prodId).subscribe((res)=>{
      res.count = 1 ;
      res.searchIcon = false ;
      res.newPrice = 0 ;
      this.prodDetails = res;
      console.log(this.prodDetails);
    });

  }

  back(){
    this.location.back()
  }

  details:any;
  // prodDetails(prod:any){
  //   prod.like = false;
  //   this.details = prod ;
  //   //console.log(this.details);
  // }


  increase(){
    this.prodDetails.count++ ;

    if(this.prodDetails.kind !=='mainDish'){
      const total = this.prodDetails.count * this.prodDetails.price;
      console.log('Total : ',total);
      this.prodDetails.newPrice = total;
      console.log('newPrice = ',this.prodDetails.newPrice);
      // this.details.forEach((ele:any) => {
      //   ele.newPrice = total;
      //   console.log('newPrice = ',ele.newPrice);
      // });

    }







    if(this.small.nativeElement.checked==true){
      let total = this.small?.nativeElement.value * this.prodDetails.count ;
      this.prodDetails.price = total;
    }else if(this.medium?.nativeElement.checked==true){
      let total = this.medium.nativeElement.value * this.prodDetails.count ;
      this.prodDetails.price = total;
    }else if(this.large.nativeElement.checked==true){
      let total = this.large.nativeElement.value * this.prodDetails.count ;
      this.prodDetails.price = total;
    }else if(this.family.nativeElement.checked==true){
      let total = this.family.nativeElement.value * this.prodDetails.count ;
      this.prodDetails.price = total;
    }
  }

  decrease(){
    if(this.prodDetails.count>1){
      this.prodDetails.count--;
    }


    if(this.small.nativeElement.checked==true){
      let total = this.small.nativeElement.value * this.prodDetails.count ;
      this.prodDetails.price = total;
    }else if(this.medium.nativeElement.checked==true){
      let total = this.medium.nativeElement.value * this.prodDetails.count ;
      this.prodDetails.price = total;
    }else if(this.large.nativeElement.checked==true){
      let total = this.large.nativeElement.value * this.prodDetails.count ;
      this.prodDetails.price = total;
    }else if(this.family.nativeElement.checked==true){
      let total = this.family.nativeElement.value * this.prodDetails.count ;
      this.prodDetails.price = total;
    }
  }

  @ViewChild('small') small !:ElementRef;
  checkSmall(){
    let total = this.small.nativeElement.value * this.prodDetails.count ;
    this.prodDetails.price = total;
    //console.log(this.small.nativeElement.checked);

  }

  @ViewChild('medium') medium !: ElementRef;
  checkMedium(){
    let total = this.medium.nativeElement.value * this.prodDetails.count ;
    this.prodDetails.price = total;
    // console.log(this.medium.nativeElement.checked);
  }

  @ViewChild('large') large !: ElementRef ;
  checkLarge(){
    let total = this.large.nativeElement.value * this.prodDetails.count ;
    this.prodDetails.price = total;
  }

  @ViewChild('family') family !: ElementRef ;
  checkFamily(){
    let total = this.family.nativeElement.value * this.prodDetails.count ;
    this.prodDetails.price = total;
  }

  favourite(){
    this.prodDetails.like =! this.prodDetails.like
    console.log(this.prodDetails.like)
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
