import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  isLogedSubject:BehaviorSubject<boolean>;
  constructor() {
    this.isLogedSubject = new BehaviorSubject<boolean>(false);
  }

  login(userName:string,password:string){
    let usrToken ='123456';
    localStorage.setItem("token",usrToken);
    this.isLogedSubject.next(true);
  }

  logout(){
    localStorage.removeItem("token");
    this.isLogedSubject.next(false);
  }

  get getIsUserLoged():boolean{
    return (localStorage.getItem('token')) ? true : false ;
  }

  getLogedStatus(){
    return this.isLogedSubject;
  }

  isLogin:boolean = false ;
}
