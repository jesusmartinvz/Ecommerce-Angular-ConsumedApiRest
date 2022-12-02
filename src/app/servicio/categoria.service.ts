import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../modelos/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/categorias';

  getCategorias(){
    return this.http.get<Categoria[]>(this.url);
  }

  createCategoria(categoria: Categoria){
    return this.http.post<Categoria>(this.url,categoria);
  }

  getCategoriaId(id:number){
    return this.http.get<Categoria>(this.url+"/"+id);
  }
  updateCategoria(producto:Categoria){
    return this.http.put<Categoria>(this.url,producto);
  }

  deleteCategoria(categoria:Categoria){
    return this.http.delete<Categoria>(this.url+"/"+categoria.id);
  }
}
