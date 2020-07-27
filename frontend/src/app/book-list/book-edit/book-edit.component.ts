import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/service/book.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/model/book.interface';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  book: Book = null

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.bookService.getBook(params['id']).subscribe(data => this.book = data)
    })
  }

  onSubmit() {
    this.bookService.updateBook(this.book).subscribe(result => {
      alert('Buch erfolgreich geupdated')
      this.router.navigate(['/'])
    }, error => alert(error))
  }

}
