import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProductoComponent } from './componentes/producto/listar-producto/listar-producto.component';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";
import { AddProductoComponent } from './componentes/producto/add-producto/add-producto.component';
import { EditProductoComponent } from './componentes/producto/edit-producto/edit-producto.component';
import { ListarCategoriaComponent } from './componentes/categoria/listar-categoria/listar-categoria.component';
import { AddCategoriaComponent } from './componentes/categoria/add-categoria/add-categoria.component';
import { EditCategoriaComponent } from './componentes/categoria/edit-categoria/edit-categoria.component';
import { VerifyLoginComponent } from './componentes/login/verify-login/verify-login.component';
import { CatalogoComponent } from './componentes/ecommerce/catalogo/catalogo.component';
import { AgregarComponent } from './componentes/ecommerce/agregar/agregar.component';
import { CarritoComponent } from './componentes/ecommerce/carrito/carrito.component';
@NgModule({
  declarations: [
    AppComponent,
    ListarProductoComponent,
    AddProductoComponent,
    EditProductoComponent,
    ListarCategoriaComponent,
    AddCategoriaComponent,
    EditCategoriaComponent,
    VerifyLoginComponent,
    CatalogoComponent,
    AgregarComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
