import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = '/src/assets/produtos.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Produto[]>(this.API).pipe(
      first(),
      delay(15000),
      tap(produtos => console.log(produtos))
    );
  }
}
