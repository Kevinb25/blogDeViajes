import { Component, inject } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { PostsService } from '../../services/posts.service';
import { CardPostComponent } from "../card-post/card-post.component";


@Component({
  selector: 'app-blog',
  imports: [CardPostComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  arrPosts: IPost[] = [];
  postsServices = inject(PostsService);

  ngOnInit() {
    this.arrPosts = this.postsServices.getAll()

  }



}
