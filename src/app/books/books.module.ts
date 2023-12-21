import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//-Project
import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';

//-Angular material
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

//-Redux
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/books.effects';
import { AddBooksComponent } from './add-books/add-books.component';
import { EditBooksComponent } from './edit-books/edit-books.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddBooksComponent,
    EditBooksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    StoreModule.forFeature('mybooks', bookReducer),
    EffectsModule.forFeature([BooksEffects])
  ]
})
export class BooksModule { }
