import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(public translate:TranslateService,private cartSer:CartService) {}


  ngOnInit(): void {

  }

  changeSrc(el:HTMLElement){
    if(el.getAttribute('src')=='../../assets/en.png'){
      el.setAttribute('src','../../assets/ar.png');
      this.translate.use('en');
      let body = document.getElementsByTagName("body")[0] as HTMLElement ;
      body.style.direction = 'ltr' ;
    }else if(el.getAttribute('src')=='../../assets/ar.png'){
      el.setAttribute('src','../../assets/en.png');
      this.translate.use('ar');
      let body = document.getElementsByTagName("body")[0] as HTMLElement ;
      body.style.direction = 'rtl' ;
    }

  }

  emp = this.cartSer.isEmpty ;

  hideNavbar(el:HTMLElement){
    el.classList.remove("show");
  }



}
