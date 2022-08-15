import { ClienteModel } from './cliente.model';
import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from '../cliente-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  public clientes: ClienteModel[] = [];

  constructor(private clientesService: ClienteServiceService) { }

  ngOnInit() {
    this.getClientes();
  }

  public getClientes(): void {
    this.clientesService.getListar().subscribe({
      next: (response: ClienteModel) => {
        this.clientes.push(response);
      },

    })

  }
}

