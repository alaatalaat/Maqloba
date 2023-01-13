import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';

export const passwordMatch : ValidatorFn = (control:AbstractControl) : ValidationErrors | null =>{
  let passwordControl = control.get('password');
  let confirmPasswordControl = control.get('confirmPassword');

  if(!passwordControl || !confirmPasswordControl || !passwordControl.value || !confirmPasswordControl.value)
    return null ;

  let valErr = {'UnmatchedPassword':{'pass':passwordControl.value,'confirm':confirmPasswordControl.value}}
  return (passwordControl.value==confirmPasswordControl.value) ? null : valErr ;
}
