import { PostsService } from './../../services/posts.service';
import { Component, inject } from '@angular/core';
import { ICategory } from '../../interfaces/icategory.interface';

@Component({
  selector: 'app-nav-posts',
  imports: [],
  templateUrl: './nav-posts.component.html',
  styleUrl: './nav-posts.component.css'
})
export class NavPostsComponent {
  arrCategory: ICategory[] = [];
  categoryService = inject(PostsService)

  ngOnInit() {
    this.arrCategory = this.categoryService.getAll()
  }
}
