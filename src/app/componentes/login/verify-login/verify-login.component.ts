import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/Cliente';
import { CarritoService } from 'src/app/servicio/carrito.service';
import { ClienteService } from 'src/app/servicio/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verify-login',
  templateUrl: './verify-login.component.html',
  styleUrls: ['./verify-login.component.css']
})


export class VerifyLoginComponent implements OnInit {
  modelCliente = new Cliente();
  clientel?:Cliente;
  name:any = "Iniciar Sesion";
  
  

  constructor(private router:Router, private clienteService:ClienteService, private carritoService:CarritoService) { }

  ngOnInit(): void {
  }

  loguear(cliente:Cliente){
    

    this.clienteService.login(cliente).subscribe( data=>{
      var correo = document.getElementById('email') as HTMLInputElement;
      var password = document.getElementById('password') as HTMLInputElement;

      if(correo.value ==""){
        Swal.fire("Ingrese un correo electrónico");
        return;
      }
      if(password.value ==""){
        Swal.fire("Ingrese una contraseña");
        return;
      }
      if(data!=null){
        this.clientel=data;
        console.log(data);
        sessionStorage.setItem('nombreLogin', this.clientel.nombres);
        sessionStorage.setItem('idLogin',this.clientel.id.toString());

        this.name = sessionStorage.getItem('nombreLogin');

        this.carritoService.addSessionLogin(this.clientel);

        Swal.fire("Bienvenido a PCstore");
        this.router.navigate(['ecommerce']);
      }else{
        Swal.fire("La clave es incorrecta o la cuenta no existe");
        //Swal.fire("La cuenta ingresada es incorrecta o no existe");
      }
    });
  }
  

}
