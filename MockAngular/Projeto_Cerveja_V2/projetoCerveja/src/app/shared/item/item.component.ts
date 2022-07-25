import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() public src?: string;
  @Input() public customClass: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public obterItem(): string {

    if(this.src){
      return this.src;
    }

    return 'assets/image/itemSemFoto.png'

  }

}
