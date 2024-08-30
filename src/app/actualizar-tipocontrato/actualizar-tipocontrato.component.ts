import { Component, OnInit } from '@angular/core';
import { Tipocontrato } from '../tipocontrato';
import { TipocontratoService } from '../tipocontrato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-tipocontrato',
  templateUrl: './actualizar-tipocontrato.component.html',
  styleUrls: ['./actualizar-tipocontrato.component.css']
})
export class ActualizarTipocontratoComponent implements OnInit {

  id: number;
  tipocontrato: Tipocontrato = new Tipocontrato();

  constructor(private tipocontratoService: TipocontratoService, private  router: Router, private route: ActivatedRoute) {}

  ngOnInit() : void{
    this.id = this.route.snapshot.params['id'];


    this.tipocontratoService.obtenerTipoContratoporId(this.id).pipe(tap(dato => {
      this.tipocontrato = dato;
    }),


  catchError(Error =>{  
    console.error(Error);
    return of (null);})

  ).subscribe();
}

irAlaListaTipoContrato() {
  this.router.navigate(['/tiposcontratos']);

  Swal.fire('Tipo de contrato actualizado', `El tipo de contrato ${this.tipocontrato.nombre} ha sido actualizado con exito`, `success`);
}

onSubmit(): void {
  if (this.tipocontrato) {
    this.tipocontratoService.actualizarTipoContrato(this.id, this.tipocontrato).pipe(
      tap(dato => {
        this.irAlaListaTipoContrato(); // Redirige en caso de éxito
      }),
      catchError(error => {
        console.error('Error al actualizar el tipo de contrato:', error);
        return of(null); // Retorna un observable vacío en caso de error
      })
    ).subscribe(); // Realiza la suscripción
  }
}

}



