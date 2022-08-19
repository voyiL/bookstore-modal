import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { CheckBookOutComponent } from './check-book-out/check-book-out.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BookComponent,
    ListBooksComponent,
    CreateBookComponent,
    UpdateBookComponent,
    ReturnBookComponent,
    CheckBookOutComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class BookModule { }
