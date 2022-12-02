import { Categoria } from "./Categoria";

export class Producto{
    id: number;
    codigo: string;
    descripcion: string;
    precio: number;
    stock: number;
    garantia: number;
    imagen: string;
    descuento: number;
    categoria!: Categoria;

    constructor(){
        this.id=1;
        this.codigo="";
        this.descripcion="";
        this.stock=0;
        this.garantia=0;
        this.imagen="";
        this.descuento=0;
        this.precio=0;

    }
}