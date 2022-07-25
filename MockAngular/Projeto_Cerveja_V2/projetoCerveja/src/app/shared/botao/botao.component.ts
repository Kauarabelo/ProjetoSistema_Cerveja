import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

  @Input() public texto?: string;
  @Input() public cor?: string = 'primaria';

  constructor() { }

  ngOnInit(): void {
  }

}
