import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {
  
  constructor(private service:OrderDetailsService) { }
  itemData: any;
  
  ngOnInit(): void {
    this.itemData = this.service.itemDetails;
  }

}
