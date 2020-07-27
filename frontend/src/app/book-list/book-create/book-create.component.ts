import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/shared/model/book.interface';
import { BookService } from 'src/app/shared/service/book.service';
import { Author } from 'src/app/shared/model/author.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // check if form is valid
    if (form.valid) {
      const book: Book = {
        name: form.value.name,
        isbn: form.value.isbn,
        author: {
          first_name: form.value.first_name,
          last_name: form.value.last_name
        } as Author
      }
      this.bookService.createBook(book).subscribe(result => {
        alert('Buch erfolgreich erstellt')
        this.router.navigate(['/'])
      }, error => {
        alert('Ein Fehler ist aufgetreten')
      })
    }
  }

}
