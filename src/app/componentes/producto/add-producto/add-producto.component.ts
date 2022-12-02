import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelos/Categoria';
import { Producto } from 'src/app/modelos/Producto';
import { CarritoService } from 'src/app/servicio/carrito.service';
import { CategoriaService } from 'src/app/servicio/categoria.service';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  modelProducto = new Producto();
  categorias!:Categoria[];
  constructor(private router:Router, private productoService:ProductoService, private categoriaService:CategoriaService) { }

  ngOnInit(): void {
    this.cargarCategoria();
  }

  guardar(producto:Producto){

    this.productoService.createProducto(producto).subscribe( data=>{
        this.router.navigate(['productos']);
    });
  }

  cancelar(){
    this.router.navigate(['productos']);
  }

  
  cargarCategoria(){
    this.categoriaService.getCategorias().subscribe(
      data=>{
        this.categorias=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }
  

}
