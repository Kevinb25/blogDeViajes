import { Component, inject, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../interfaces/ipost.interface';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-post',
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() idPost: string = "";
  postService = inject(PostsService);
  router = inject(Router)
  postUsuario!: IPost;

  ngOnInit() {
    let id: number = Number(this.idPost);

    let response = this.postService.getById(id)
    console.log(this.idPost)
    console.log(this.postUsuario)
    if (response) {
      this.postUsuario = response

    } else {
      alert('Este post no existe');
      this.router.navigate(['**'])
    }
  }

}
