import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/Cliente';
import { Producto } from 'src/app/modelos/Producto';
import { Venta } from 'src/app/modelos/Venta';
import { VentaDetalle } from 'src/app/modelos/VentaDetalle';
import { CarritoService } from 'src/app/servicio/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  items = this.carritoService.getItems();

  total:number=0;

  modelVenta = new Venta();
  

  cliente:any={
    /*
    id: 7,
    dni:'',
    nombres:'',
    apePaterno:'',
    apeMaterno:'',
    email:'',
    password:'',
    telefono:'',
    direccion:'',
    fechaRegistro:''
    */
  }
  constructor(private carritoService: CarritoService, private router: Router) { }

  ngOnInit(): void {
    this.cargarDatos();
    this.carroVacio();
    this.traerSesion();
  }

  traerSesion(){
    this.cliente = this.carritoService.getLoginSesion();

  }


  guardarVenta(){
    
    this.modelVenta = new Venta();
    this.modelVenta.totalFac = this.total;
    this.modelVenta.cliente = this.cliente;
    this.modelVenta.ventaDetalleDTOS = this.items;
    if(this.cliente==null){
      Swal.fire({
        icon: 'error',
        title: 'Loguin',
        text: 'Debe iniciar Sesión',
      });
      this.router.navigate(['login']);
      return;
    }
    console.log(this.modelVenta);
    this.carritoService.resistrarVenta(this.modelVenta).subscribe( data=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se realizo la compra con éxito',
        showConfirmButton: false,
        timer: 2000
      })
      this.items.splice(0, this.items.length);
        this.router.navigate(['ecommerce']);
    });
     
  }


  cargarDatos(){
    for (let i = 0; i < this.items.length; i++) {
      this.total=this.total+this.items[i].importe;
    }
  }

  eliminarProducto(id:number){
    console.log(id);
    for (let i = 0; i < this.items.length; i++) {
      if(this.items[i].producto.id===id){
        this.total=this.total-this.items[i].importe
        this.items.splice(i,1)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto Eliminado',
          showConfirmButton: false,
          timer: 1500
        })
        this.carroVacio()
      }
      
    }
  }

  carroVacio(){
    if (this.items.length===0) {
      this.router.navigate(['/'])
    }
  }

  

  

}
