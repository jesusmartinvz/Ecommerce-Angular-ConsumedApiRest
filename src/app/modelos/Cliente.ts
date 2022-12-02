export class Cliente{
    id: number;
    dni: string;
    nombres: string;
    apePaterno: string;
    apeMaterno: string;
    email: string;
    password: string;
    telefono: string;
    direccion: string;
    fechaRegistro: string;

    constructor(){
        this.id=0;
        this.dni="";
        this.nombres="";
        this.apePaterno="";
        this.apeMaterno="";
        this.email="";
        this.password="";
        this.telefono="";
        this.direccion="";
        this.fechaRegistro="";
    }
}