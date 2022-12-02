export class Item{
    id: number;
    descripcion: string;
    precio: number;
    unidades: number;
    subtotal: number;

    constructor(){
        this.id=0;
        this.descripcion="";
        this.precio=0;
        this.unidades=0;
        this.subtotal=0;

    }
}