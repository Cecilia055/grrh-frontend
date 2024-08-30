import { Component, OnInit } from '@angular/core';
import { Aguinaldo } from '../aguinaldo';
import { AguinaldoService } from '../aguinaldo.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-aguinaldo',
  templateUrl: './lista-aguinaldo.component.html',
  styleUrls: ['./lista-aguinaldo.component.css']
})
export class ListaAguinaldoComponent implements OnInit {

  aguinaldos : Aguinaldo [];

constructor( private aguinaldoService: AguinaldoService, private router: Router) {}

ngOnInit(): void {
 this.obtenerAguinaldo();
}

actualizarAguinaldo(id: number) {
  this.router.navigate(['actualizar-aguinaldo', id]);
}

private obtenerAguinaldo(){
  this.aguinaldoService.obtenerListaAguinaldo().subscribe(dato =>{
   this.aguinaldos = dato;
  });
}

eliminarAguinaldo(id: number) {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "Confirma si deseas eliminar el aguinaldo",
    icon: 'warning', // Cambiado 'type' a 'icon'
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, elimínalo',
    cancelButtonText: 'No, cancelar',
    buttonsStyling: true
  }).then((result) => {
    if (result.isConfirmed) {
      
      this.aguinaldoService.eliminarAguinaldo(id).subscribe(dato => {
        console.log(dato);
        this.obtenerAguinaldo();
        Swal.fire(
          'Aguinaldo eliminado',
          'El aguinaldo ha sido eliminado con exito',
          'success'
        )
      })
    }
  });
}

verDetallesDelAguinaldo(id: number) {
  this.router.navigate(['detalle-aguinaldo', id]);
}

}
