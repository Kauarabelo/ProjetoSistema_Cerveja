
export class CarrinhoModel { 

  public id: number;
  public itemName: string;
  public itemDetails: string;
  public itemPrice: number;
  public itemImg: string;

  constructor(id: number, itemName: string, itemDetails: string, itemPrice: number, itemImg: string){

      this.id = id;
      this.itemName = itemName;
      this.itemDetails = itemDetails;
      this.itemPrice = itemPrice;
      this.itemImg = itemImg;
  }


}
