import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/clientes';
  urlogin = 'http://localhost:8080/api/clientes/login';

  login(cliente: Cliente){
    return this.http.post<Cliente>(this.urlogin,cliente);
  }

}
