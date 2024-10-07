import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appFormato]'
})
export class FormatoDirective {
  constructor( private el: ElementRef ) {
    this.el.nativeElement.style.fontSize = '20px'
   }


}
