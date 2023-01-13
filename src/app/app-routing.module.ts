import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SelectAddressComponent } from './select-address/select-address.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './Guards/auth.guard';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'add-meal',component:AddNewProductComponent},
  {path:'menu',component:MenuComponent,canActivate:[AuthGuard]},
  {path:'menu/:id',component:ProdDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'contact-us',component:GetInTouchComponent},
  {path:'register',component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {
    path:'user' ,
    loadChildren: ()=> import('src/app/user-module/user-module.module').then(m => m.UserModuleModule)
  },
  {path:'select-address',component:SelectAddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
