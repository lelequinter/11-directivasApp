import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _color: string = 'red';
  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }

  private _mensaje: string = 'Campo requerido'
  @Input() set mensaje(msg: string) {
    this._mensaje = msg;
    this.setMsg();
  };

  private _valido: boolean = false;
  @Input() set valido(valor: boolean) {
    if (valor) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  };

  htmlElement: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }


  ngOnInit(): void {
    this.setEstilo();
    this.setColor();
    this.setMsg();
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMsg(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
