import { ICategory } from "./icategory.interface";

export interface IPost {
    id?: number,
    titulo: string,
    texto: string,
    autor: string,
    imagen: string,
    fecha: string,
    categoria: ICategory
}
