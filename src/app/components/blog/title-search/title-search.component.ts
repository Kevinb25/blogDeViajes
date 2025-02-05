import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-title-search',
  imports: [ReactiveFormsModule],
  templateUrl: './title-search.component.html',
  styleUrl: './title-search.component.css'
})
export class TitleSearchComponent {

  @Output() busquedaEmitida: EventEmitter<string> = new EventEmitter()
  titleForm: FormGroup;

  constructor() {
    this.titleForm = new FormGroup({
      title: new FormControl("", [])
    }, [])
  }

  getTitle() {
    this.busquedaEmitida.emit(this.titleForm.value.title)

  }
  clearSearch() {
    this.titleForm.reset();
    this.busquedaEmitida.emit('');
  }
}
