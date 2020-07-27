import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-list/book-detail/book-detail.component';
import { BookEditComponent } from './book-list/book-edit/book-edit.component';
import { BookCreateComponent } from './book-list/book-create/book-create.component';
import { HomeComponent } from './home/home.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorCreateComponent } from './author-list/author-create/author-create.component';
import { AuthorDetailComponent } from './author-list/author-detail/author-detail.component';
import { AuthorEditComponent } from './author-list/author-edit/author-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/create', component: BookCreateComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'authors/create', component: AuthorCreateComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'books/:id/edit', component: BookEditComponent },
  { path: 'authors/:id', component: AuthorDetailComponent },
  { path: 'authors/:id/edit', component: AuthorEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
