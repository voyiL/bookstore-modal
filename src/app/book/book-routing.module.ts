import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { CreateBookComponent } from './create-book/create-book.component';

const routes: Routes = [{ path: '', component: BookComponent }, { path: 'add', component: CreateBookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
