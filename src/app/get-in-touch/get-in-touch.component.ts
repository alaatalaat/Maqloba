import { TranslateService } from '@ngx-translate/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {

  contactForm :FormGroup;
  constructor(private fb:FormBuilder,public translate:TranslateService) {
    this.contactForm = fb.group({
      name :['',[Validators.required,Validators.pattern('[A-Za-zأ-ي]{3,}')] ],
      email :['',[Validators.required,this.exitEmailValidatro()]],
      subject :[''],
      message :['',[Validators.required]],
    });

  }

  get name(){
    return this.contactForm.get('name');
  }

  get email(){
    return this.contactForm.get('email');
  }

  get subject(){
    return this.contactForm.get('subject');
  }

  get message(){
    return this.contactForm.get('message');
  }

  exitEmailValidatro():ValidatorFn{
    return (control:AbstractControl) : ValidationErrors | null =>{
      let emailVal:string = control.value ;
      let ValidationError={'EmailNotValid' : {'value':emailVal}} ;
      if(emailVal.length==0 && control.untouched)
        return null ;
      return (emailVal.includes('@')) ? null : ValidationError ;
    }
  }

  ngOnInit(): void {
  }

}
