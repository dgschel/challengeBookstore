import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from 'src/app/shared/model/author.interface';
import { AuthorService } from 'src/app/shared/service/author.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit {
  author$: Observable<Author>

  constructor(private authorService: AuthorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.author$ = this.authorService.getAuthor(params['id'])
    })
  }

  onDelete(author: Author) {
    this.authorService.deleteAuthor(author._id).subscribe(result => {
      alert('Author erfolgreich gelöscht')
      this.router.navigate(['/'])
    }, error => {
      alert(error)
    })
  }

}
