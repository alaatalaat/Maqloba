import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const routes:Routes = [
  {path:'login',component:SigninComponent},
  {path:'register',component:SignupComponent},
  {path:'',redirectTo:'/user/login'},
];

@NgModule({
  declarations: [
    SigninComponent ,
    SignupComponent ,
  ],
  imports: [
    CommonModule ,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    HttpClientModule ,
    TranslateModule.forRoot({
      defaultLanguage:'ar',
      loader:{
        provide : TranslateLoader ,
        useFactory : createTranslateLoader ,
        deps : [HttpClient]
      }
    }),

  ]
})
export class UserModuleModule { }
export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
