import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  @Input() color: string = 'red';
  @Input() mensaje: string = 'Campo requerido';

  htmlElement: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    // console.log('constructor directive');
    // console.log(el);

    this.htmlElement = el;
  }
  ngOnInit(): void {
    // console.log('ngOnInit directive');
    this.setColor();
    this.setMsg();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMsg(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }
}
