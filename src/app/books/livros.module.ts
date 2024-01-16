import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//-Project
import { LivrosRoutingModule } from './livros-routing.module';
import { HomeComponent } from './home/home.component';

//-Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

//-Redux
import { StoreModule } from '@ngrx/store';
import { livrosReducer } from './store/livros.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LivrosEffects } from './store/livros.effects';
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
    LivrosRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    StoreModule.forFeature('meuslivros', livrosReducer),
    EffectsModule.forFeature([LivrosEffects])
  ]
})
export class LivrosModule { }
