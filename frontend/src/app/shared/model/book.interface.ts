import { Author } from './author.interface';

export interface Book {
    _id?: string,
    name: string,
    isbn: string,
    createdAt?: Date,
    updatedAt?: Date,
    author: Author
}
