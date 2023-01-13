import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeTextColor]'
})
export class ChangeTextColorDirective {
  @HostBinding('class.active') color:boolean | undefined;

  @HostListener('mouseover') onmouseover(){
    this.changeColor('F99E22');
    this.color = true;
  }
  @HostListener('mouseleave') onmouseenter(){
    this.changeColor('#fff');
    this.color = false ;
  }


  constructor(private renderer:Renderer2,private el:ElementRef) { }

  changeColor(color:string){
    this.renderer.setStyle(this.el.nativeElement,'color',color);
  }

}
