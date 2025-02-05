import { PostsService } from '../../../services/posts.service';
import { category } from './../../../db/posts.db';
import { Component, EventEmitter, inject, Output } from '@angular/core';

@Component({
  selector: 'app-select-category',
  imports: [],
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.css'
})
export class SelectCategoryComponent {
  @Output() seleccionEmitida: EventEmitter<string> = new EventEmitter();
  categoryList: string[] = [];
  postService = inject(PostsService)

  ngOnInit() {

    this.categoryList = this.postService.getAllCategories()
  }
  getCategory(event: any) {

    this.seleccionEmitida.emit(event.target.value)
  }

}
