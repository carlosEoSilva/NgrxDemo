import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectBooks } from '../store/livros.selector';
import { buscarLivrosApi } from '../store/livros.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _store:Store) { }

  livros$= this._store.pipe(select(selectBooks));

  ngOnInit(): void {
    this._store.dispatch(buscarLivrosApi());
  }

}
