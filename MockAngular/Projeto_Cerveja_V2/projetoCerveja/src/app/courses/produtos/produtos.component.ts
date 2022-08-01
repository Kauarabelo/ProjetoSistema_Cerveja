import { ProdutosService } from './../services/produtos.service';
import { Produto } from '../model/produto';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos$: Observable<Produto[]>;
  displayedColumns = ['name', 'category'];

  //produtosService: ProdutosService;

  constructor(
    private produtosService: ProdutosService,
    public dialog: MatDialog
    ) {
    //this.produtos = [];
    //this.produtosService = new ProdutosService();
    this.produtos$ = this.produtosService.list()
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });
  }

  ngOnInit(): void {

  }

}
