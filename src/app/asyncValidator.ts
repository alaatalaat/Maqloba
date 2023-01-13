import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import {Observable,map} from "rxjs";
import { ajax } from "rxjs/ajax";
import { delay} from "rxjs/operators";

export function usernameValidator():AsyncValidatorFn{
  return (control:AbstractControl):Observable<ValidationErrors |null>=>{
    return checkusername().pipe(
      map(res=>{
        console.log('res is',res);
        return res.email === control.value ? {usernameExists:true} : null ;
      })
    );
  }

  function checkusername():Observable<any>{
    return ajax.getJSON('https://jsonplaceholder.typicode.com/users')
    .pipe(delay(1000))
  }
}
