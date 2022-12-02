import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/Cliente';
import { Producto } from 'src/app/modelos/Producto';
import { CarritoService } from 'src/app/servicio/carrito.service';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  productos?:Producto[];
  client!:any;
  name:any = "Iniciar Sesion";

  constructor(private router:Router ,private productoService:ProductoService, private carritoService: CarritoService) { }
  
  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
          data=>{
            this.productos=data;
            console.log(data);
          },
          error=>{
            console.log(error);
          }
     );

     this.traerSesion();
     
  }

  traerSesion(){
    this.client = this.carritoService.getLoginSesion();
    sessionStorage.setItem('nombreLogin', this.client.nombres);
    sessionStorage.setItem('idLogin',this.client.id.toString());
    console.log(sessionStorage.getItem('nombreLogin'));
    
    if(sessionStorage.getItem('nombreLogin')!= null){
      this.name = sessionStorage.getItem('nombreLogin');
    }
  }

  agregar(producto:Producto):void{
    localStorage.setItem("idprod",producto.id.toString()); 
     this.router.navigate(['addecommerce']);
  }

  itemCount(){
    return this.carritoService.itemsCount();
  }

  irCarrito(){
    this.router.navigate(['carrito']);
  }



}
