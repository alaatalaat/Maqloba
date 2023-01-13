import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[active-tab]'
})
export class ActiveTabDirective {

  constructor() { }
  @HostListener('click') onclick(el:HTMLElement){
    el.classList.add('active');
  }

  @HostListener('mouseleave') mouseleave(el:HTMLElement){
    el.classList.remove('active');
  }

}
