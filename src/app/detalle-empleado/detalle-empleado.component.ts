import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements  OnInit {

  id: number;
  empleado: Empleado;

  constructor(private route: ActivatedRoute, private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoService.obtenerEmpleadoporId(this.id).subscribe(dato => {
      this.empleado = dato;
      Swal.fire(`Detalles del Empleado  ${this.empleado.nombre}`);
    });
  }
}
