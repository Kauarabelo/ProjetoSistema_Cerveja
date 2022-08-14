import { ClienteModel } from './cliente/cliente.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  public URL = environment.springServiceUrl;

  constructor(public http: HttpClient) { }

  public getListar(): Observable<any> {
    return this.http.get<any>(`${this.URL}/clientes`);
  }

  public getListarId(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/clientes/${id}`);
  }


  // itemDetails: ClienteModel[] = [

    // new ClienteModel ({},{},{})

  // ]

}
