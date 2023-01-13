import { Component, OnInit } from '@angular/core';
import { Validators, FormArray, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { passwordMatch } from 'src/app/CustomValidator/passwordMatch.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  error = 'border-danger';

  constructor(private fb:FormBuilder,public translate:TranslateService) { }

  // registerForm = this.fb.group({
  //   fname : ['',Validators.required],
  //   lname : ['',Validators.required],
  //   email : ['',[Validators.required,Validators.email]],
  //   password : ['',Validators.required],
  //   confirmPassword : ['',Validators.required],
  //   genderControl :[false,Validators.required],
  //   phone : ['',[Validators.required,Validators.maxLength(11)]],
  //   antherPhone : this.fb.array([])
  // },{validators:passwordMatch});

  // get firstName(){ return this.registerForm.get('fname'); }
  // get lastName(){  return this.registerForm.get('lname'); }
  // get email(){ return this.registerForm.get('email'); }
  // get password(){ return this.registerForm.get('password');}
  // get confirmPassword(){ return this.registerForm.get('confirmPassword');}
  // get gender(){ return this.registerForm.get('genderControl'); }
  // get phone(){return this.registerForm.get('phone'); }
  // get antherPhone(){ return this.registerForm.get('antherPhone') as FormArray;}

  // addAntherPhone(ele:HTMLElement){
  //   this.antherPhone.push(this.fb.control(''));
  //   ele.style.display = 'none';
  // }

  //  enrollData(){
  //   console.log(this.registerForm.value);
  //   console.log(this.registerForm);
  //  }


  ngOnInit(): void {
  }




}
