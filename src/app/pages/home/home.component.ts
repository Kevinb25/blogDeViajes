import { PostsService } from './../../services/posts.service';
import { Component, inject } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { BlogComponent } from "../../components/blog/blog.component";




@Component({
  selector: 'app-home',
  imports: [BlogComponent],
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
