import { Producto } from "./Producto";
import { Venta } from "./Venta";

export class VentaDetalle{
    id: number;
    producto!: Producto;
    cantidad: number;
    preciovta: number;
    importe: number;
    //venta!: Venta;
    
    constructor(){
        this.id=0;
        this.cantidad=0;
        this.preciovta=0;
        this.importe=0;
    }
}