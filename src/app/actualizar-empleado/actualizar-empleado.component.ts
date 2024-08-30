import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  id: number;
  empleado: Empleado = new Empleado();

  constructor(private empleadoService: EmpleadoService, private  router: Router, private route: ActivatedRoute) {}

  ngOnInit() : void{
    this.id = this.route.snapshot.params['id'];


    this.empleadoService.obtenerEmpleadoporId(this.id).pipe(tap(dato => {
      this.empleado = dato;
    }),


  catchError(Error =>{  
    console.error(Error);
    return of (null);})

  ).subscribe();
}

irAlaListaEmpleado() {
  this.router.navigate(['/empleados']);

  Swal.fire('Empleado actualizado', `El empleado ${this.empleado.nombre} ha sido actualizado con exito`, `success`);
}

onSubmit(): void {
  if (this.empleado) {
    this.empleadoService.actualizarEmpleado(this.id, this.empleado).pipe(
      tap(dato => {
        this.irAlaListaEmpleado(); // Redirige en caso de éxito
      }),
      catchError(error => {
        console.error('Error al actualizar el empleado:', error);
        return of(null); // Retorna un observable vacío en caso de error
      })
    ).subscribe(); // Realiza la suscripción
  }
}

}
