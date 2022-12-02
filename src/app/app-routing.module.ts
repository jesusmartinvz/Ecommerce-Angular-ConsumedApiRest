import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriaComponent } from './componentes/categoria/add-categoria/add-categoria.component';
import { EditCategoriaComponent } from './componentes/categoria/edit-categoria/edit-categoria.component';
import { ListarCategoriaComponent } from './componentes/categoria/listar-categoria/listar-categoria.component';
import { AgregarComponent } from './componentes/ecommerce/agregar/agregar.component';
import { CarritoComponent } from './componentes/ecommerce/carrito/carrito.component';
import { CatalogoComponent } from './componentes/ecommerce/catalogo/catalogo.component';
import { VerifyLoginComponent } from './componentes/login/verify-login/verify-login.component';
import { AddProductoComponent } from './componentes/producto/add-producto/add-producto.component';
import { EditProductoComponent } from './componentes/producto/edit-producto/edit-producto.component';
import { ListarProductoComponent } from './componentes/producto/listar-producto/listar-producto.component';

const routes: Routes = [
  { path: '', redirectTo: '/ecommerce', pathMatch: 'full' },
  {path: 'productos', component:ListarProductoComponent},
  {path: 'nuevoProducto', component:AddProductoComponent},
  {path: 'editarProducto', component:EditProductoComponent},
  {path: 'categorias', component:ListarCategoriaComponent},
  {path: 'nuevaCategoria', component:AddCategoriaComponent},
  {path: 'editarCategoria', component:EditCategoriaComponent},
  {path: 'login', component:VerifyLoginComponent},
  {path: 'ecommerce', component:CatalogoComponent},
  {path: 'addecommerce', component:AgregarComponent},
  {path: 'carrito', component:CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
