import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  texto1: string = 'leyder'

  miFormulario: FormGroup = this.fb.group(
    {
      nombre: ['', [Validators.required]]
    }
  )

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  tieneError(campo: string) {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre(){
    this.texto1 = 'Quintero'
  }

}
