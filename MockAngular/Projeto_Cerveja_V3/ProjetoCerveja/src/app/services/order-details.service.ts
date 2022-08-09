import { CarrinhoModel } from './../pages/carrinho/carrinho.model';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  itemDetails: CarrinhoModel[] = [

      new CarrinhoModel (1,'Pilsen','Cerveja',8,'https://emporiodacerveja.vtexassets.com/arquivos/ids/178992-800-auto?v=637466864881130000&width=800&height=auto&aspect=true'),

      new CarrinhoModel (2,'Bohemia','Cerveja',15,'https://supercordeiro.com.br/wp-content/uploads/2020/11/18274-CERVEJA-BOHEMIA-PILSEN-LN-355ML.png'),

      new CarrinhoModel (3,'Eisenbahn','Cerveja',12,'https://static.wixstatic.com/media/e5bf37_2477f1397afe40b899394d457449aa86~mv2.png/v1/fill/w_395,h_600,al_c/e5bf37_2477f1397afe40b899394d457449aa86~mv2.png'),

      new CarrinhoModel (4,'Eisenbahn','Cerveja',12,'https://static.wixstatic.com/media/e5bf37_2477f1397afe40b899394d457449aa86~mv2.png/v1/fill/w_395,h_600,al_c/e5bf37_2477f1397afe40b899394d457449aa86~mv2.png'),

      new CarrinhoModel (5,'Eisenbahn','Cerveja',12,'https://static.wixstatic.com/media/e5bf37_2477f1397afe40b899394d457449aa86~mv2.png/v1/fill/w_395,h_600,al_c/e5bf37_2477f1397afe40b899394d457449aa86~mv2.png'),

      new CarrinhoModel (6,'Eisenbahn','Cerveja',12,'https://static.wixstatic.com/media/e5bf37_2477f1397afe40b899394d457449aa86~mv2.png/v1/fill/w_395,h_600,al_c/e5bf37_2477f1397afe40b899394d457449aa86~mv2.png'),

  ]
}
