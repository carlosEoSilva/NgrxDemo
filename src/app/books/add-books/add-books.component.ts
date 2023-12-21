import { Component, OnInit } from '@angular/core';
import { Form, NgForm, NgModel } from '@angular/forms';
import { BooksService } from '../books.service';
import { Store, select } from '@ngrx/store';
import { invokeSaveBookApi } from '../store/books.action';
import { Book } from '../store/book.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IAppstate } from 'src/app/shared/store/appstate.interface';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { setApiStatus } from 'src/app/shared/store/app.action';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  constructor(
    private _service:BooksService, 
    private _store:Store,
    private _snackBar: MatSnackBar,
    private _appStore:Store<IAppstate>,
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

    let newBook= new Book(
      this._service.getBookNextId(),
      form.value.bookTitle,
      form.value.bookAuthor,
      form.value.bookCover,
      form.value.bookPrice
    );

    this._store.dispatch(invokeSaveBookApi({ newBook: newBook }));
    
    let appStatus$= this._appStore.pipe(select(selectAppState));

    appStatus$.subscribe((data)=>{
      if(data.apiStatus === 'success'){
        //-não entendi porque está resentando o estado da api novamente.
        this._appStore.dispatch(
          setApiStatus({ apiStatus:{apiStatus: '', apiResponseMessage: ''}})//-resetando o estado global da api
        );
        this._router.navigate(['/']);
      }
    });

    this.openSnackBarSave();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      panelClass: 'snack-bar'
    });
  }

  openSnackBarSave() {
    this._snackBar.open("Book saved", "", {
      duration: 3000,
      panelClass: 'snack-bar'
    });
  }

}
