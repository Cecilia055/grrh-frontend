import { Component, OnInit } from '@angular/core';
import { Tipodocumento } from '../tipodocumento';
import { TipodocumentoService } from '../tipodocumento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-tipodocumento',
  templateUrl: './actualizar-tipodocumento.component.html',
  styleUrls: ['./actualizar-tipodocumento.component.css']
})
export class ActualizarTipodocumentoComponent implements OnInit {

  id: number;
  tipodocumento: Tipodocumento = new Tipodocumento();

  constructor(private tipodocumentoService: TipodocumentoService, private  router: Router, private route: ActivatedRoute) {}

  ngOnInit() : void{
    this.id = this.route.snapshot.params['id'];


    this.tipodocumentoService.obtenerTipoDocumentoporId(this.id).pipe(tap(dato => {
      this.tipodocumento = dato;
    }),


  catchError(Error =>{  
    console.error(Error);
    return of (null);})

  ).subscribe();
}

irAlaListaTipoDocumento() {
  this.router.navigate(['/tiposdocumentos']);

  Swal.fire('Tipo de documento actualizado', `El tipo de documento ${this.tipodocumento.tipo} ha sido actualizado con exito`, `success`);
}

onSubmit(): void {
  if (this.tipodocumento) {
    this.tipodocumentoService.actualizarTipoDocumento(this.id, this.tipodocumento).pipe(
      tap(dato => {
        this.irAlaListaTipoDocumento(); // Redirige en caso de éxito
      }),
      catchError(error => {
        console.error('Error al actualizar el tipo de documento:', error);
        return of(null); // Retorna un observable vacío en caso de error
      })
    ).subscribe(); // Realiza la suscripción
  }
}

}






