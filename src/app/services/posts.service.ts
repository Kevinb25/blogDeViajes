import { ICategory } from './../interfaces/icategory.interface';
import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: IPost[] = [

    {
      id: 1,
      titulo: 'Post 1',
      texto: 'Texto del post 1',
      autor: 'Autor 1',
      imagen: '',
      fecha: '2023-01-01',
      categoria: ICategory[]

    },
    {
      id: 2,
      titulo: 'Post 2',
      texto: 'Texto del post 2',
      autor: 'Autor 2',
      imagen: '',
      fecha: '2023-02-02',
      categoria: ICategory[]
    },
    {
      id: 3,
      titulo: 'Post 3',
      texto: 'Texto del post 3',
      autor: 'Autor 3',
      imagen: '',
      fecha: '2023-03-03',
      categoria: ICategory[]
    },
    {
      id: 4,
      titulo: 'Post 4',
      texto: 'Texto del post 4',
      autor: 'Autor 4',
      imagen: '',
      fecha: '2023-04-04',
      categoria: ICategory[]
    },
    {
      id: 5,
      titulo: 'Post 5',
      texto: 'Texto del post 5',
      autor: 'Autor 5',
      imagen: '',
      fecha: '2023-05-05',
      categoria: ICategory[]
    },
    {
      id: 6,
      titulo: 'Post 6',
      texto: 'Texto del post 6',
      autor: 'Autor 6',
      imagen: '',
      fecha: '2023-06-06',
      categoria: ICategory[]
    },
    {
      id: 7,
      titulo: 'Post 7',
      texto: 'Texto del post 7',
      autor: 'Autor 7',
      imagen: '',
      fecha: '2023-07-07',
      categoria: ICategory[]
    },
    {
      id: 8,
      titulo: 'Post 8',
      texto: 'Texto del post 8',
      autor: 'Autor 8',
      imagen: '',
      fecha: '2023-08-08',
      categoria: ICategory[]
    },
    {
      id: 9,
      titulo: 'Post 9',
      texto: 'Texto del post 9',
      autor: 'Autor 9',
      imagen: '',
      fecha: '2023-09-09',
      categoria: ICategory[]
    },
    {
      id: 10,
      titulo: 'Post 10',
      texto: 'Texto del post 10',
      autor: 'Autor 10',
      imagen: '',
      fecha: '2023-10-10',
      categoria: ICategory[]
    },
    {
      id: 11,
      titulo: 'Post 11',
      texto: 'Texto del post 11',
      autor: 'Autor 11',
      imagen: '',
      fecha: '2023-11-11',
      categoria: ICategory[]
    },
    {
      id: 12,
      titulo: 'Post 12',
      texto: 'Texto del post 12',
      autor: 'Autor 12',
      imagen: '',
      fecha: '2023-12-12',
      categoria: ICategory[]
    },
    {
      id: 13,
      titulo: 'Post 13',
      texto: 'Texto del post 13',
      autor: 'Autor 13',
      imagen: '',
      fecha: '2023-01-13',
      categoria: ICategory[]
    },
    {
      id: 14,
      titulo: 'Post 14',
      texto: 'Texto del post 14',
      autor: 'Autor 14',
      imagen: '',
      fecha: '2023-02-14',
      categoria: ICategory[]
    },
    {
      id: 15,
      titulo: 'Post 15',
      texto: 'Texto del post 15',
      autor: 'Autor 15',
      imagen: '',
      fecha: '2023-03-15',
      categoria: ICategory[]
    }
  ]


}
export class PostsService {
  private arrCategory: ICategory[] = ["Playa", "Montaña", "Ciudad", "Rural", "Festivales"]
}