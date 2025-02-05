
import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost.interface';
import { Posts } from '../db/posts.db';




@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: IPost[] = Posts;
  private categoryList: string[] = []
  private arrPosts: IPost[] = [] /* cambios */
  private id: number = 15
  constructor() {
    this.categoryList = Array.from(new Set(Posts.map(post => post.categoria.titulo)))
  }

  getAll(): IPost[] {
    return this.posts;
  }

  getById(id: number): IPost | undefined {
    return this.posts.find(post => post.id === id)
  }

  getByTitle(title: string): IPost[] {
    return this.posts.filter(post => post.titulo.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
  }

  getCategory(categoria: string): IPost[] {
    return this.posts.filter(post => post.categoria.titulo.includes(categoria)) //aqui MUY ELEGANTE//
  }


  getAllCategories(): string[] {
    return this.categoryList

  }
  insert(newPost: IPost): any {
    let busqueda = this.arrPosts.find(post => post.titulo.toLowerCase() === newPost.titulo.toLowerCase())
    if (busqueda === undefined) {
      newPost.id = this.id
      this.arrPosts.push(newPost)
      this.id++
    } else {
      return { message: 'Este Post ya existe' };
    }
  }
  getNewPost(): IPost[] {
    return this.arrPosts
  }
}