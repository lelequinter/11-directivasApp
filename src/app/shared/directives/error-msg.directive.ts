import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  @Input() color: string = 'red';
  @Input() mensaje: string = 'Campo requerido';

  htmlElement: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const mensaje = changes["mensaje"].currentValue;
    console.log(mensaje);
    this.setMsg();
  }

  ngOnInit(): void {
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
