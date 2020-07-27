import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../model/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiBookUrl = 'http://localhost:3000/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiBookUrl);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(this.apiBookUrl + '/' + id)
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiBookUrl, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.patch<Book>(this.apiBookUrl + '/' + book._id, book)
  }

  deleteBook(id: string): Observable<Book> {
    return this.http.delete<Book>(this.apiBookUrl + '/' + id)
  }
}
