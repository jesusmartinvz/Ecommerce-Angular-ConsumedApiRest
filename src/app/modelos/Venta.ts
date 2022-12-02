import { Cliente } from "./Cliente";
import { VentaDetalle } from "./VentaDetalle";

export class Venta{
    id: number;
    totalFac: number;
    fechaFac: Date;
    cliente!: Cliente;
    ventaDetalleDTOS!: VentaDetalle[];


    constructor(){
        this.id=0;
        this.totalFac=0;
        this.totalFac=0;
        this.fechaFac=new Date("2022-01-01");  
    }
}