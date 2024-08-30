import { Component, OnInit } from '@angular/core';
import { Aguinaldo } from '../aguinaldo';
import { AguinaldoService } from '../aguinaldo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-aguinaldo',
  templateUrl: './actualizar-aguinaldo.component.html',
  styleUrls: ['./actualizar-aguinaldo.component.css']
})
export class ActualizarAguinaldoComponent implements OnInit {

  id: number;
  aguinaldo: Aguinaldo = new Aguinaldo();

  constructor(private aguinaldoService: AguinaldoService, private  router: Router, private route: ActivatedRoute) {}

  ngOnInit() : void{
    this.id = this.route.snapshot.params['id'];


    this.aguinaldoService.obtenerAguinaldoporId(this.id).pipe(tap(dato => {
      this.aguinaldo = dato;
    }),


  catchError(Error =>{  
    console.error(Error);
    return of (null);})

  ).subscribe();
}

irAlaListaAguinaldo() {
  this.router.navigate(['/aguinaldos']);

  Swal.fire('Aguinaldo actualizado', `El aguinaldo ${this.aguinaldo.nombre_empleado} ha sido actualizado con exito`, `success`);
}

onSubmit(): void {
  if (this.aguinaldo) {
    this.aguinaldoService.actualizarAguinaldo(this.id, this.aguinaldo).pipe(
      tap(dato => {
        this.irAlaListaAguinaldo(); // Redirige en caso de éxito
      }),
      catchError(error => {
        console.error('Error al actualizar el aguinaldo:', error);
        return of(null); // Retorna un observable vacío en caso de error
      })
    ).subscribe(); // Realiza la suscripción
  }
}

}



