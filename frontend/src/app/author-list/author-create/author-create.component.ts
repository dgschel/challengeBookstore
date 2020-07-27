import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Author } from 'src/app/shared/model/author.interface';
import { AuthorService } from 'src/app/shared/service/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.scss']
})
export class AuthorCreateComponent implements OnInit {

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const author: Author = {
        first_name: form.value.first_name,
        last_name: form.value.last_name
      }

      this.authorService.createAuthor(author).subscribe(result => {
        alert('Author erfolgreich erstellt')
        this.router.navigate(['/'])
      }, error => alert(error))
    }
  }

}
