import { Injectable } from '@angular/core';
import { Observable, Observer, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  private adsList : string[];;
  constructor() {
    this.adsList =[
      "اشتري مقلوبة عن طريق بطاقتك البنكية واحصل علي الثانية مجانا",
      "لو قالولك تختار وجبة وحدة من مقلوبة ببلاش اي وجبة بتختار ؟",
      "ادفع نص السعر والباقي علينا",
    ]
  }

  getScheduledAds(intervalInSeconds:number):Observable<string>{
    return new Observable<string>((observer)=>{
      let counter = 0 ;
      let adsTimer = setInterval(()=>{
        if(counter==this.adsList.length){
          observer.complete();
        }

        if(this.adsList[counter] ==""){
          observer.error("Error : Empty Ad...");
        }

        observer.next(this.adsList[counter]);
        counter++;
      },intervalInSeconds*1000);
    });
  }



  // private adsList :Array<Object>;
  // constructor() {
  //   this.adsList =[
  //     {ads:"اشتري مقلوبة عن طريق بطاقتك البنكية واحصل علي الثانية مجانا",img:'img1.png'},
  //     {ads:"لو قالولك تختار وجبة وحدة من مقلوبة ببلاش اي وجبة بتختار ؟",img:'img2.png'}
  //   ]
  // }

  // getScheduledAds(intervalInSeconds:number):Observable<string>{
  //   return new Observable<string>((observer)=>{
  //     let counter = 0 ;
  //     let adsTimer = setInterval(()=>{
  //       if(counter==this.adsList.length){
  //         observer.complete();
  //       }

  //       if(this.adsList[counter] ==""){
  //         observer.error("Error : Empty Ad...");
  //       }

  //       observer.next(this.adsList[counter].toString());
  //       counter++;
  //     },intervalInSeconds*1000);
  //   });
  // }





}
