import { PostsService } from './../../services/posts.service';
import { Component, inject } from '@angular/core';
import { NavPostsComponent } from "../../components/nav-posts/nav-posts.component";
import { IPost } from '../../interfaces/ipost.interface';
import { BlogComponent } from "../../components/blog/blog.component";



@Component({
  selector: 'app-home',
  imports: [NavPostsComponent, BlogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  arrPost: IPost[] = []
  postsService = inject(PostsService)

  ngOnInit() {
    this.arrPost = this.postsService.getAll()
  }
}
