import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BookListComponent } from './book-list/book-list.component';
import { BookCreateComponent } from './book-list/book-create/book-create.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-list/book-detail/book-detail.component';
import { BookEditComponent } from './book-list/book-edit/book-edit.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorCreateComponent } from './author-list/author-create/author-create.component';
import { AuthorEditComponent } from './author-list/author-edit/author-edit.component';
import { AuthorDetailComponent } from './author-list/author-detail/author-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCreateComponent,
    HeaderComponent,
    HomeComponent,
    BookDetailComponent,
    BookEditComponent,
    AuthorListComponent,
    AuthorCreateComponent,
    AuthorEditComponent,
    AuthorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
