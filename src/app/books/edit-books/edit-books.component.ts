import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectBookById } from '../store/books.selector';
import { Book } from '../store/book.class';
import { switchMap } from 'rxjs';
import { invokeDeleteBookApi, invokeUpdateBookApi } from '../store/books.action';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';
import { IAppstate } from 'src/app/shared/store/appstate.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private _store:Store,
    private _appStore:Store<IAppstate>,
    private _router:Router,
    private _snackBar: MatSnackBar,
    private _route:ActivatedRoute) { }

  public bookToUpdate= new Book();
  public defaultCover:string= "../../../assets/Books/Images/default-cover.jpg";
  public coverPreview:string= this.defaultCover;

  ngOnInit(): void {
    let fetchFormData$= this._route.paramMap.pipe(
      switchMap((param)=>{
        var id= Number(param.get('id'));
        return this._store.pipe(select(selectBookById(id)));
      })
    );

    fetchFormData$.subscribe((data)=>{
      if(data){
        this.bookToUpdate= {...data};
        this.coverPreview= data.Cover;
      }
      else{
        this._router.navigate(['/']);
      }
    })
  }

  public updateBook(form:NgForm){

    if(!form.valid){
      this.openSnackBar();
      return
    }

    this.bookToUpdate.Author= form.value.bookAuthor;
    this.bookToUpdate.Cover= form.value.bookCover;
    this.bookToUpdate.Price= form.value.bookPrice;
    this.bookToUpdate.Title= form.value.bookTitle;

    this._store.dispatch(invokeUpdateBookApi({ updatedBook: this.bookToUpdate }));

    let appStatus$= this._appStore.pipe(select(selectAppState));

    appStatus$.subscribe((data)=>{
      if(data.apiStatus === 'success')
        this._router.navigate(['/']);
    });

    
  }

  public preview(cover:NgModel){
    console.log(cover.value);

    if(cover.value != '')
      this.coverPreview= cover.value;
    else
      this.coverPreview= this.defaultCover;
  }

  public openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      panelClass: 'snack-bar'
    });
  }

  public openSnackBarDelete() {
    this._snackBar.open("Book removed", "",{
      duration: 3000,
      panelClass: 'snack-bar'
    });
  }

  deleteBook(){
    this._store.dispatch(invokeDeleteBookApi({ id: this.bookToUpdate.Id }));

    let appStatus$= this._appStore.pipe(select(selectAppState));
    appStatus$.subscribe((data)=>{
      if(data.apiStatus === "success")
        this._router.navigate(['/']);
    });

    this.openSnackBarDelete();
  }

  
}

