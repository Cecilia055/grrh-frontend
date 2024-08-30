import { Component, OnInit } from '@angular/core';
import { Departamento } from '../departamento';
import { ActivatedRoute } from '@angular/router';
import { DepartamentoService } from '../departamento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-departamento',
  templateUrl: './detalle-departamento.component.html',
  styleUrls: ['./detalle-departamento.component.css']
})
export class DetalleDepartamentoComponent implements OnInit {

  iddepartamento: number;
  departamento: Departamento;

  constructor(private route: ActivatedRoute, private departamentoService: DepartamentoService) { }

  ngOnInit(): void {
    this.iddepartamento = this.route.snapshot.params['iddepartamento'];
    this.departamento = new Departamento();
    this.departamentoService.obtenerDepartamentoporId(this.iddepartamento).subscribe(dato => {
      this.departamento = dato;
      Swal.fire(`Detalles del departamento  ${this.departamento.nombreDepartamento}`);
    });
  }

}
