import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/modelos/Item';
import { Producto } from 'src/app/modelos/Producto';
import { VentaDetalle } from 'src/app/modelos/VentaDetalle';
import { CarritoService } from 'src/app/servicio/carrito.service';
import { ProductoService } from 'src/app/servicio/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  producto: Producto= new Producto();
  //item: Item = new Item();
  item: VentaDetalle = new VentaDetalle();
  items = this.carritoService.getItems();
  name:any = "Iniciar Sesion";
  client!:any;
  
  constructor(private carritoService: CarritoService ,private router:Router, private productoService:ProductoService) { }
  
  ngOnInit(): void {
    this.cargarProducto();
    this.traerSesion();
  }

  cargarProducto(){
    let id= JSON.parse(localStorage.getItem('idprod') as string);
    this.productoService.getProductoId(id).subscribe(data=>{
     this.producto=data;
  });
 }
 

 inicio(){
  this.router.navigate(['ecommerce']);
  } 

//AGREGAR AL CARRO
/*
  addToCart(producto: Producto){
    this.carritoService.addToCart(producto);
    window.alert("Su producto fue agregar al carrito");
  }*/
  

  addToCart(){
    var cantidad = document.getElementById('quantity') as HTMLInputElement;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].producto.id===this.producto.id) {
        this.items[i].cantidad=this.items[i].cantidad + parseInt(cantidad.value);
        this.items[i].importe=this.items[i].cantidad*this.items[i].producto.precio;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se agregó mas unidades del producto a su pedido',
          showConfirmButton: false,
          timer: 2000
        })
        return;
      }
    }
    this.item.id= 0;
    this.item.producto = this.producto;
    this.item.cantidad = parseInt(cantidad.value);
    this.item.preciovta = this.item.producto.precio-(this.item.producto.precio*this.item.producto.descuento);
    this.item.importe = parseFloat((this.item.preciovta * this.item.cantidad).toFixed(2));

    if(parseInt(cantidad.value)>this.producto.stock){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El producto no cuenta con stock suficiente',
      });
      return;
    }

  
    this.carritoService.addToCart(this.item);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Su producto fue agregado',
      showConfirmButton: false,
      timer: 2000
    })
  }

  increase(id:number){
    
  }

  itemCount(){
    return this.carritoService.itemsCount();
  }

  irCarrito(){
    this.router.navigate(['carrito']);
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

}
