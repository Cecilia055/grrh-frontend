import { Component, OnInit } from '@angular/core';
import { Departamento } from '../departamento';
import { DepartamentoService } from '../departamento.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-departamento',
  templateUrl: './lista-departamento.component.html',
  styleUrls: ['./lista-departamento.component.css']
})
export class ListaDepartamentoComponent implements OnInit{

  departamentos : Departamento [];

constructor( private departamentoService: DepartamentoService, private router: Router) {}

ngOnInit(): void {
 this.obtenerDepartamentos();
}

actualizarDepartamento(iddepartamento: number) {
  this.router.navigate(['actualizar-departamento', iddepartamento]);
}

private obtenerDepartamentos(){
  this.departamentoService.obtenerListaDepartamentos().subscribe(dato =>{
   this.departamentos = dato;
  });
}

eliminarDepartamento(id: number) {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "Confirma si deseas eliminar el departamento",
    icon: 'warning', // Cambiado 'type' a 'icon'
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, elimínalo',
    cancelButtonText: 'No, cancelar',
    buttonsStyling: true
  }).then((result) => {
    if (result.isConfirmed) {
      
      this.departamentoService.eliminarDepartamento(id).subscribe(dato => {
        console.log(dato);
        this.obtenerDepartamentos();
        Swal.fire(
          'Departamento eliminado',
          'El departamento ha sido eliminado con exito',
          'success'
        )
      })
    }
  });
}

verDetallesDelDepartamento(id: number) {
  this.router.navigate(['detalle-departamento', id]);
}
}