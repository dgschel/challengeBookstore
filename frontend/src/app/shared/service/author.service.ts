import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book.interface';
import { Author } from '../model/author.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiAuthorkUrl = 'http://localhost:3000/api/authors';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.apiAuthorkUrl);
  }

  getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(this.apiAuthorkUrl + '/' + id)
  }

  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.apiAuthorkUrl, author);
  }

  updateAuthor(author: Author): Observable<Author> {
    return this.http.patch<Author>(this.apiAuthorkUrl + '/' + author._id, author)
  }

  deleteAuthor(id: string): Observable<Author> {
    return this.http.delete<Author>(this.apiAuthorkUrl + '/' + id)
  }
}
