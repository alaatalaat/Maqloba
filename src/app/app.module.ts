import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { NavbarComponent } from './fixed-ui/navbar/navbar.component';
import { ChangeTextColorDirective } from './Directives/change-text-color.directive';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './fixed-ui/footer/footer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MenuComponent } from './menu/menu.component';
import { SetCardStyleInMenuComDirective } from './Directives/set-card-style-in-menu-com.directive';
import { ActiveTabDirective } from './Directives/active-tab.directive';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { CartComponent } from './cart/cart.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { SelectAddressComponent } from './select-address/select-address.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewProductComponent,
    NavbarComponent,
    ChangeTextColorDirective,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    SetCardStyleInMenuComDirective,
    ActiveTabDirective,
    ProdDetailsComponent,
    CartComponent,
    GetInTouchComponent,
    SelectAddressComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    TranslateModule.forRoot({
      defaultLanguage:'ar',
      loader:{
        provide : TranslateLoader ,
        useFactory : createTranslateLoader ,
        deps : [HttpClient]
      }
    }),
    // AgmCoreModule.forRoot({
    //   apiKey:'AIzaSyBPrfUXAYfG_CftR4teDlF16TytGINOjAo'
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
