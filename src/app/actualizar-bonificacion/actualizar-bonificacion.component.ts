import { Component, OnInit } from '@angular/core';
import { Bonificacion } from '../bonificacion';
import { BonificacionService } from '../bonificacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-bonificacion',
  templateUrl: './actualizar-bonificacion.component.html',
  styleUrls: ['./actualizar-bonificacion.component.css']
})
export class ActualizarBonificacionComponent implements OnInit {

  id: number;
  bonificacion: Bonificacion = new Bonificacion();

  constructor(private bonificacionService: BonificacionService, private  router: Router, private route: ActivatedRoute) {}

  ngOnInit() : void{
    this.id = this.route.snapshot.params['id'];


    this.bonificacionService.obtenerBonificacionporId(this.id).pipe(tap(dato => {
      this.bonificacion= dato;
    }),


  catchError(Error =>{  
    console.error(Error);
    return of (null);})

  ).subscribe();
}

irAlaListaBonificacion() {
  this.router.navigate(['/bonificacion']);

  Swal.fire('Bonificacion actualizado', `La bonificacion ${this.bonificacion.tipo} ha sido actualizado con exito`, `success`);
}

onSubmit(): void {
  if (this.bonificacion) {
    this.bonificacionService.actualizarBonificacion(this.id, this.bonificacion).pipe(
      tap(dato => {
        this.irAlaListaBonificacion(); // Redirige en caso de éxito
      }),
      catchError(error => {
        console.error('Error al actualizar la bonificacion:', error);
        return of(null); // Retorna un observable vacío en caso de error
      })
    ).subscribe(); // Realiza la suscripción
  }
}

}
