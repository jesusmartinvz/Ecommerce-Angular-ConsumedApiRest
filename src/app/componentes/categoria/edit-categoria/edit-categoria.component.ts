import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelos/Categoria';
import { CategoriaService } from 'src/app/servicio/categoria.service';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {

  categoria: Categoria= new Categoria();
  constructor( private router:Router, private categoriaService:CategoriaService ) { }

  ngOnInit(): void {
    this.editar();
  }

  editar(){
      let id= JSON.parse(localStorage.getItem('id') as string);
      this.categoriaService.getCategoriaId(id).subscribe(data=>{
       this.categoria=data;
    });
   }

   actualizar(categoria:Categoria){
      this.categoriaService.updateCategoria(categoria).subscribe(data=>{
          this.categoria=data; 
          this.router.navigate(['categorias']);
      });
   }

   cancelar(){
    this.router.navigate(['categorias']);
  }
}
