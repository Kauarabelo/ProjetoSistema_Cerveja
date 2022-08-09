import { __values } from 'tslib';
import { ActivatedRoute } from '@angular/router';
import { ClienteModel } from './../cliente/cliente/cliente.model';
import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html'  ,
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: OrderDetailsService) { }
  getCarrinhoId: any;
  itemData:any;
  CarrinhoData: any;

  ngOnInit(): void {
    this.getCarrinhoId = this.param.snapshot.paramMap.get('id');
    if (this.getCarrinhoId) {
      this.CarrinhoData = this.service.itemDetails.filter((value) => {
        return value.id == this.getCarrinhoId

      })
    }
  }

  clienteList: ClienteModel[] = [];

  enviar(): void {

      // this.clienteList.push({this.nome});

  }

}
