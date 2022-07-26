import { Produto } from '../model/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor() {
    //this.courses = [];
  }

  ngOnInit(): void {
  }

}
