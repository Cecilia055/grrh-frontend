import { Component, OnInit } from '@angular/core';
import { Departamento } from '../departamento';
import { DepartamentoService } from '../departamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-departamento',
  templateUrl: './actualizar-departamento.component.html',
  styleUrls: ['./actualizar-departamento.component.css']
})
export class ActualizarDepartamentoComponent implements OnInit {

  iddepartamento: number;
  departamento: Departamento = new Departamento();

  constructor(private departamentoService: DepartamentoService, private  router: Router, private route: ActivatedRoute) {}

  ngOnInit() : void{
    this.iddepartamento = this.route.snapshot.params['iddepartamento'];


    this.departamentoService.obtenerDepartamentoporId(this.iddepartamento).pipe(tap(dato => {
      this.departamento = dato;
    }),


  catchError(Error =>{  
    console.error(Error);
    return of (null);})

  ).subscribe();
}

irAlaListaDepartamentos() {
  this.router.navigate(['/departamentos']);

  Swal.fire('Departamento actualizado', `El departamento ${this.departamento.nombreDepartamento} ha sido actualizado con exito`, `success`);
}

onSubmit(): void {
  if (this.departamento) {
    this.departamentoService.actualizarDepartamento(this.iddepartamento, this.departamento).pipe(
      tap(dato => {
        this.irAlaListaDepartamentos(); // Redirige en caso de éxito
      }),
      catchError(error => {
        console.error('Error al actualizar el departamento:', error);
        return of(null); // Retorna un observable vacío en caso de error
      })
    ).subscribe(); // Realiza la suscripción
  }
}
}
