import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/model/book.interface';
import { BookService } from 'src/app/shared/service/book.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.book$ = this.bookService.getBook(params['id'])
    })
  }

  onDelete(book: Book) {
    this.bookService.deleteBook(book._id).subscribe(result => {
      alert('Buch erfolgreich gelöscht')
      this.router.navigate(['/'])
    }, error => {
      alert(error)
    })
  }

}
