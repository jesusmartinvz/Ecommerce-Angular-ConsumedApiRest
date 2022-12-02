import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelos/Categoria';
import { Producto } from 'src/app/modelos/Producto';
import { CategoriaService } from 'src/app/servicio/categoria.service';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  producto: Producto= new Producto();
  categorias!:Categoria[];
  constructor( private router:Router, private productoService:ProductoService, private categoriaService:CategoriaService ) { }

  ngOnInit(): void {
    this.editar();
    this.cargarCategoria();
  }

  editar(){
      let id= JSON.parse(localStorage.getItem('id') as string);
      this.productoService.getProductoId(id).subscribe(data=>{
       this.producto=data;
    });
   }

   actualizar(producto:Producto){
      this.productoService.updateProducto(producto).subscribe(data=>{
          this.producto=data; 
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
