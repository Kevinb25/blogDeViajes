import { Component } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      titulo: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ]),
      texto: new FormControl("", [
        Validators.required,
        Validators.minLength(10)
      ]),
      autor: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ]),
      imagen: new FormControl("", [Validators.required]),
      fecha: new FormControl("", []),
      categoria: new FormControl("", [
        Validators.required
      ]),
    }, [])
  }


  getDataForm() {
    console.log(this.formModel.value)
  }

  checkErrorField(field: string, error: string): boolean {
    if (this.formModel.get(field)?.hasError(error) && this.formModel.get(field)?.touched) {
      return true
    }
    return false
  }
}
