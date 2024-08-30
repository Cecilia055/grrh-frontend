import { Component, OnInit } from '@angular/core';
import { DetallePlanilla } from '../detalle-planilla';
import { DetallePlanillaService } from '../detalle-planilla.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-detalleplanilla',
  templateUrl: './actualizar-detalleplanilla.component.html',
  styleUrls: ['./actualizar-detalleplanilla.component.css']
})
export class ActualizarDetalleplanillaComponent implements OnInit {

  id: number;
  detalleplanilla: DetallePlanilla = new DetallePlanilla();

  constructor(private detalleplanillaService: DetallePlanillaService, private  router: Router, private route: ActivatedRoute) {}

  ngOnInit() : void{
    this.id = this.route.snapshot.params['id'];


    this.detalleplanillaService.obtenerDetallePlanillaPorId(this.id).pipe(tap(dato => {
      this.detalleplanilla = dato;
    }),


  catchError(Error =>{  
    console.error(Error);
    return of (null);})

  ).subscribe();
}

irAlaListadetallePlanilla() {
  this.router.navigate(['/detallesplanillas']);

  Swal.fire('Detalle de Planilla actualizado', `El detalle de planilla ${this.detalleplanilla.nombre_empleado} ha sido actualizado con exito`, `success`);
}

onSubmit(): void {
  if (this.detalleplanilla) {
    this.detalleplanillaService.actualizarDetallePlanilla(this.id, this.detalleplanilla).pipe(
      tap(dato => {
        this.irAlaListadetallePlanilla(); // Redirige en caso de éxito
      }),
      catchError(error => {
        console.error('Error al actualizar el detalle de planilla:', error);
        return of(null); // Retorna un observable vacío en caso de error
      })
    ).subscribe(); // Realiza la suscripción
  }
}
}


