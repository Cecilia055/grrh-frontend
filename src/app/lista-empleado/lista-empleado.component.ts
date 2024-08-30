import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit {

  empleados : Empleado [];

constructor( private empleadoService: EmpleadoService, private router: Router) {}

ngOnInit(): void {
 this.obtenerEmpleado();
}

actualizarEmpleado(id: number) {
  this.router.navigate(['actualizar-empleado', id]);
}

private obtenerEmpleado(){
  this.empleadoService.obtenerListaEmpleado().subscribe(dato =>{
   this.empleados = dato;
  });
}

eliminarEmpleado(id: number) {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "Confirma si deseas eliminar el empleado",
    icon: 'warning', // Cambiado 'type' a 'icon'
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, elimínalo',
    cancelButtonText: 'No, cancelar',
    buttonsStyling: true
  }).then((result) => {
    if (result.isConfirmed) {
      
      this.empleadoService.eliminarEmpleado(id).subscribe(dato => {
        console.log(dato);
        this.obtenerEmpleado();
        Swal.fire(
          'Empleado eliminado',
          'El empleado ha sido eliminado con exito',
          'success'
        )
      })
    }
  });
}

verDetallesDelEmpleado(id: number) {
  this.router.navigate(['detalle-empleado', id]);
}
}



