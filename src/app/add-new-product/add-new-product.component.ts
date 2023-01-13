import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormsModule,ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {
  allProducts = this.serv.allProducts ;
  addProdForm = new FormGroup({
    mealName : new FormControl(''),
    mealImg  : new FormControl(''),
    mealDescription : new FormControl(''),
    price: new FormControl(0),
    kind : new FormControl('',Validators.required),
    small    :  new FormGroup({
      price  :  new FormControl(0),
      calories : new FormControl(''),
    }),
    medium    :  new FormGroup({
      price  :  new FormControl(0),
      calories : new FormControl(''),
    }),
    large    :  new FormGroup({
      price  :  new FormControl(0),
      calories : new FormControl(''),
    }),
    family    :  new FormGroup({
      price  :  new FormControl(0),
      calories : new FormControl(''),
    }),
  });

  addProduct(){
    console.log(this.addProdForm.value);
    this.serv.allProducts.push(this.addProdForm.value);
    // console.log('All product',this.serv.allProducts);
    this.http.post('http://localhost:3000/products',this.addProdForm.value).subscribe({
      next:  (res)=>{
        alert('Successfully Send Data');
        this.addProdForm.reset();
      },
      error: (res)=>{
        alert('Failed Send Data ');
      }
    });
  }

  constructor(private http:HttpClient,private serv:ProductsService){ }

  ngOnInit(): void {}

}
