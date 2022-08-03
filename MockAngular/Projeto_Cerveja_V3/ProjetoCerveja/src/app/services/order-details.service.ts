import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  itemDetails = [

    {

      id: 1,
      itemName: "Pilsen",
      itemDetails: "Cerveja",
      itemPrice: "8",
      itemImg: "https://emporiodacerveja.vtexassets.com/arquivos/ids/178992-800-auto?v=637466864881130000&width=800&height=auto&aspect=true"

    },
    {

      id: 2,
      itemName: "Bohemia",
      itemDetails: "Cerveja",
      itemPrice: "15",
      itemImg: "https://supercordeiro.com.br/wp-content/uploads/2020/11/18274-CERVEJA-BOHEMIA-PILSEN-LN-355ML.png"

    },
    {

      id: 3,
      itemName: "Eisenbahn",
      itemDetails: "Cerveja",
      itemPrice: "12",
      itemImg: "https://static.wixstatic.com/media/e5bf37_2477f1397afe40b899394d457449aa86~mv2.png/v1/fill/w_395,h_600,al_c/e5bf37_2477f1397afe40b899394d457449aa86~mv2.png"

    },
    {

      id: 4,
      itemName: "Eisenbahn",
      itemDetails: "Cerveja",
      itemPrice: "12",
      itemImg: "https://static.wixstatic.com/media/e5bf37_2477f1397afe40b899394d457449aa86~mv2.png/v1/fill/w_395,h_600,al_c/e5bf37_2477f1397afe40b899394d457449aa86~mv2.png"

    },
    {

      id: 5,
      itemName: "Eisenbahn",
      itemDetails: "Cerveja",
      itemPrice: "12",
      itemImg: "https://static.wixstatic.com/media/e5bf37_2477f1397afe40b899394d457449aa86~mv2.png/v1/fill/w_395,h_600,al_c/e5bf37_2477f1397afe40b899394d457449aa86~mv2.png"

    },

  ]
}
