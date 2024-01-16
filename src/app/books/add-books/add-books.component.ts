import { Component, OnInit } from '@angular/core';
import { Form, NgForm, NgModel } from '@angular/forms';
import { LivrosServico } from '../livros.service';
import { Store, select } from '@ngrx/store';
import { salvarLivroApi } from '../store/livros.action';
import { Livro } from '../store/livro.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  constructor(
    private _servico:LivrosServico, 
    private _store:Store,
    private _snackBar: MatSnackBar,
    private _router:Router) { }

    defaultCover:string= "../../../assets/Books/Images/default-cover.jpg";
    coverPreview:string= this.defaultCover;

  ngOnInit(): void { 
  }

  preview(cover:NgModel){
    console.log(cover.value);

    if(cover.value != '')
      this.coverPreview= cover.value;
    else
      this.coverPreview= this.defaultCover;
  }

  saveBook(form:NgForm){
    
    if(!form.valid){
      this.openSnackBar();
      return
    }

    let newBook= new Livro(
      this._servico.getProximoId(),
      form.value.bookTitle,
      form.value.bookAuthor,
      form.value.bookCover,
      form.value.bookPrice
    );

    this._store.dispatch(salvarLivroApi({ novoLivro: newBook }));
    
    this._router.navigate(['/']);
    this.openSnackBarSave();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      panelClass: 'snack-bar'
    });
  }

  openSnackBarSave() {
    this._snackBar.open("Cadastro efetuado", "", {
      duration: 3000,
      panelClass: 'snack-bar'
    });
  }

}
