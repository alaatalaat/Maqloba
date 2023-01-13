import { PromotionAdsService } from './../services/promotion-ads.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,OnDestroy {
  dataAds:string='';
  private subscriptions :Subscription[] = [] ;
  constructor(public translate:TranslateService,
              private promoAds:PromotionAdsService) { }

  ngOnInit(): void {
    let observer = {
      next  :(data:string)=>{
        console.log('dataAds = ',data);
        return this.dataAds = data ;
      },
      error :(err:string)=>{
        console.log(err)
      },
      complete: ()=>{
        console.log("Finished...");
        return this.dataAds = ''
      }
    };
    // let adsSubscription = this.promoAds.getScheduledAds(5).subscribe(observer);
    let filterObservable = this.promoAds.getScheduledAds(5).pipe(
      filter(ad=>ad.includes(" ")),
      map(ad=>ad)
    );
    let adsSubscription = filterObservable.subscribe(observer);
    this.subscriptions.push(adsSubscription);

  }
  ngOnDestroy(){
    for(let subscription of this.subscriptions){
      subscription.unsubscribe();
    }
  }

  // dataAds:string ='';
  // private subscriptions :Subscription[] = [] ;
  // constructor(public translate:TranslateService,
  //             private promoAds:PromotionAdsService) { }

  // ngOnInit(): void {
  //   let observer = {
  //     next  :(data:string)=>{
  //       return this.dataAds = data ;
  //       console.log('dataAds = ',this.dataAds);
  //     },
  //     error :(err:string)=>{
  //       console.log(err)
  //     },
  //     complete: ()=>{
  //       console.log("Finished...");
  //       return this.dataAds = '';
  //     }
  //   };
  //   let adsSubscription = this.promoAds.getScheduledAds(5).subscribe(observer);
  //   this.subscriptions.push(adsSubscription);
  // }


  // ngOnDestroy(){
  //   for(let subscription of this.subscriptions){
  //     subscription.unsubscribe();
  //   }
  // }



  mouseover(el:HTMLElement){
    el.style.background = '#F99E22';
    el.style.borderColor = '#F99E22';
    el.style.color='#fff';
  }


}
