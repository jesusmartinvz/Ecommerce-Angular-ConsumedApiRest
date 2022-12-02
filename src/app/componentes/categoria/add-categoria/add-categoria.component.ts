import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelos/Categoria';
import { CategoriaService } from 'src/app/servicio/categoria.service';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {
  modelCategoria = new Categoria();
  constructor(private router:Router, private categoriaService:CategoriaService) { }

  ngOnInit(): void {
  }
  
  guardar(categoria:Categoria){

    this.categoriaService.createCategoria(categoria).subscribe( data=>{
        this.router.navigate(['categorias']);
    });
  }

  cancelar(){
    this.router.navigate(['categorias']);
  }

}
