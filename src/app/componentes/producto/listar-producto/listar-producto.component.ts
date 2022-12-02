import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelos/Producto';
import { CarritoService } from 'src/app/servicio/carrito.service';
import { ProductoService } from 'src/app/servicio/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  cliente:any={};

  productos?:Producto[];

  constructor(private productoService:ProductoService, private router:Router,private carritoService: CarritoService) { }

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
     this.validar();
     
  }

  validar(){
    if(this.cliente==null){
      Swal.fire({
        icon: 'error',
        title: 'Loguin',
        text: 'Debe iniciar Sesión',
      });
      this.router.navigate(['login']);
      return;
    }
  }
  nuevo():void{
    this.router.navigate(['nuevoProducto']);
  }
  editar(producto:Producto):void{
    localStorage.setItem("id",producto.id.toString()); 
     this.router.navigate(['editarProducto']);
  }
  eliminar(producto:Producto):void{
    this.productoService.deleteProducto(producto).subscribe(data=>{
            this.productos=this.productos!.filter(p=>p!==producto);
           
    });
  }

  irCategoria(){
    this.router.navigate(['categorias']);
  }

  traerSesion(){
    this.cliente = this.carritoService.getLoginSesion();

  }

}
