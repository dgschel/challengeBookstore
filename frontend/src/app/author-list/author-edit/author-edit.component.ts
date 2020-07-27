import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/shared/model/author.interface';
import { AuthorService } from 'src/app/shared/service/author.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {

  author: Author = null

  constructor(private authorService: AuthorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.authorService.getAuthor(params['id']).subscribe(data => this.author = data)
    })
  }

  onSubmit() {
    this.authorService.updateAuthor(this.author).subscribe(result => {
      alert('Author erfolgreich geupdated')
      this.router.navigate(['/'])
    }, error => alert(error))
  }

}
