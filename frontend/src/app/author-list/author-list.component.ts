import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../shared/model/author.interface';
import { AuthorService } from '../shared/service/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  authors$: Observable<Author[]>

  constructor(private authorsService: AuthorService) { }

  ngOnInit(): void {
    this.authors$ = this.authorsService.getAuthors()
  }

}
