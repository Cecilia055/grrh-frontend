import { Component } from '@angular/core';
import { DetallePlanilla } from '../detalle-planilla';
import { DetallePlanillaService } from '../detalle-planilla.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-detalle-planilla',
  templateUrl: './lista-detalle-planilla.component.html',
  styleUrls: ['./lista-detalle-planilla.component.css']
})
export class ListaDetallePlanillaComponent {

  detalleplanilla : DetallePlanilla [];

constructor( private detalleplanillaService: DetallePlanillaService, private router: Router) {}

ngOnInit(): void {
 this.obtenerDetallePlanilla();
}

actualizarDetallePlanilla(id: number) {
  this.router.navigate(['actualizar-detalleplanilla', id]);
}

private obtenerDetallePlanilla(){
  this.detalleplanillaService.obtenerListaDetallePlanilla().subscribe(dato =>{
   this.detalleplanilla = dato;
  });
}

eliminarDetallePlanilla(id: number) {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "Confirma si deseas eliminar el detalle de planilla",
    icon: 'warning', // Cambiado 'type' a 'icon'
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, elimínalo',
    cancelButtonText: 'No, cancelar',
    buttonsStyling: true
  }).then((result) => {
    if (result.isConfirmed) {
      
      this.detalleplanillaService.eliminarDetallePlanilla(id).subscribe(dato => {
        console.log(dato);
        this.obtenerDetallePlanilla();
        Swal.fire(
          'Detalle de Planilla eliminado',
          'El Detalle de  ha sido eliminado con exito',
          'success'
        )
      })
    }
  });
}

verDetallesDeDetallePlanilla(id: number) {
  this.router.navigate(['detalle-detalleplanilla', id]);
}
}
