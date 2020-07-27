import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/service/book.service';
import { Observable } from 'rxjs';
import { Book } from '../shared/model/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks()
  }

}
