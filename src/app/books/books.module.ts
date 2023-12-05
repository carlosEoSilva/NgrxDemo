import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//-Project
import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';

//-Angular material
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

//-Redux
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/books.reducer';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatCardModule,
    StoreModule.forFeature('mybooks', bookReducer),
  ]
})
export class BooksModule { }
