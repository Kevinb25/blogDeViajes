import { Component, inject } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  formModel: FormGroup;
  postsService = inject(PostsService)

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
      imagen: new FormControl("", [
        Validators.required,
        Validators.pattern(/^http:\/\/.+$/)
      ]),
      categoria: new FormControl("", [
        Validators.required
      ]),
    }, [])
  }


  getDataForm() {
    console.log(this.formModel.value)
    const respuesta = this.postsService.insert((this.formModel.value))

    this.formModel.reset()
  }

  checkErrorField(field: string, error: string): boolean {
    if (this.formModel.get(field)?.hasError(error) && this.formModel.get(field)?.touched) {
      return true
    }
    return false
  }

  resetForm() {
    this.formModel.reset();

  }
}