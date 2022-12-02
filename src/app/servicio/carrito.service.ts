import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/Cliente';
import { Item } from '../modelos/Item';
import { Producto } from '../modelos/Producto';
import { Venta } from '../modelos/Venta';
import { VentaDetalle } from '../modelos/VentaDetalle';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/api/ventas';
  //items: Producto[] = [];
  //items: Item[]=[];
  items: VentaDetalle[] = [];
  clienteLogin?:Cliente;


  resistrarVenta(venta: Venta){
    return this.http.post<Venta>(this.url,venta);
  }

  /*
  addToCart(producto: Producto){
    this.items.push(producto);
  }
  */

  addToCart(item: VentaDetalle){
    this.items.push(item);
  }
  
  getItems(){
    return this.items;
  }

  addSessionLogin(cliente: Cliente){
    this.clienteLogin = cliente;
  }

  getLoginSesion(){
    return this.clienteLogin;
  }

  itemsCount(){
    return this.items.length;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
}
