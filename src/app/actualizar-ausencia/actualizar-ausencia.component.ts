import { Component, OnInit } from '@angular/core';
import { Ausencia } from '../ausencia';
import { AusenciaService } from '../ausencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-ausencia',
  templateUrl: './actualizar-ausencia.component.html',
  styleUrls: ['./actualizar-ausencia.component.css']
})
export class ActualizarAusenciaComponent implements OnInit {

  id: number;
  ausencia: Ausencia = new Ausencia();

  constructor(private ausenciaService: AusenciaService, private  router: Router, private route: ActivatedRoute) {}

  ngOnInit() : void{
    this.id = this.route.snapshot.params['id'];


    this.ausenciaService.obtenerAusenciaporId(this.id).pipe(tap(dato => {
      this.ausencia = dato;
    }),


  catchError(Error =>{  
    console.error(Error);
    return of (null);})

  ).subscribe();
}

irAlaListaAusencia() {
  this.router.navigate(['/ausencias']);

  Swal.fire('Ausencia actualizada', `El empleado ${this.ausencia.nombre_empleado} ha sido actualizada con exito`, `success`);
}

onSubmit(): void {
  if (this.ausencia) {
    this.ausenciaService.actualizarAsencia(this.id, this.ausencia).pipe(
      tap(dato => {
        this.irAlaListaAusencia(); // Redirige en caso de éxito
      }),
      catchError(error => {
        console.error('Error al actualizar la ausencia:', error);
        return of(null); // Retorna un observable vacío en caso de error
      })
    ).subscribe(); // Realiza la suscripción
  }
}

}


