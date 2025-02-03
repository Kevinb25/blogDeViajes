import { category } from './../db/posts.db';

import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost.interface';
import { Posts } from '../db/posts.db';
import { ICategory } from '../interfaces/icategory.interface';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: IPost[] = Posts;

  getAll(): IPost[] {
    return this.posts;
  }

  getById(id: number): IPost | undefined {
    return this.posts.find(post => post.id === id)
  }



}

