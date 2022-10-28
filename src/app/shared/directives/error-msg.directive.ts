import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  @Input() set color(valor: string) {
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
  }
  // @Input() mensaje1: string = 'Campo requerido';
  private _mensaje: string = 'Campo requerido'
  @Input() set mensaje(msg: string) {
    this.htmlElement.nativeElement.innerText = msg;
    this._mensaje = msg;
  };

  htmlElement: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // const mensaje = changes["mensaje"].currentValue;
    // console.log(mensaje);
    // this.setMsg();
    // if( changes["color"] ){
    //   const color = changes["color"].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
  }

  ngOnInit(): void {
    // this.setColor();
    // this.setMsg();
    this.setEstilo();
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  // setColor(): void {
  //   this.htmlElement.nativeElement.style.color = this.color;
  // }

  // setMsg(): void {
  //   this.htmlElement.nativeElement.innerText = this.mensaje;
  // }
}
