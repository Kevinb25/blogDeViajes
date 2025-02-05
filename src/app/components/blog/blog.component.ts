
import { Component, inject } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { PostsService } from '../../services/posts.service';
import { CardPostComponent } from "../card-post/card-post.component";
import { TitleSearchComponent } from "./title-search/title-search.component";
import { SelectCategoryComponent } from "./select-category/select-category.component";



@Component({
  selector: 'app-blog',
  imports: [CardPostComponent, TitleSearchComponent, SelectCategoryComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts: IPost[] = []
  arrPosts: IPost[] = [];
  postsServices = inject(PostsService);

  ngOnInit() {
    this.arrPosts = this.postsServices.getAll()
    this.posts = this.postsServices.getNewPost()

  }

  searchByTitle(event: string) {
    this.arrPosts = this.postsServices.getByTitle(event)
  }

  getByCategory(event: string) {

    this.arrPosts = this.postsServices.getCategory(event);
  }
}
