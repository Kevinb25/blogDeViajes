import { Component, input, Input } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';



@Component({
  selector: 'app-card-post',
  imports: [],
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.css'
})
export class CardPostComponent {
  @Input() allPosts!: IPost;

}
