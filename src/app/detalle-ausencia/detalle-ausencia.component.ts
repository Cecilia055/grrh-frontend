import { Component } from '@angular/core';
import { Ausencia } from '../ausencia';
import { ActivatedRoute } from '@angular/router';
import { AusenciaService } from '../ausencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-ausencia',
  templateUrl: './detalle-ausencia.component.html',
  styleUrls: ['./detalle-ausencia.component.css']
})
export class DetalleAusenciaComponent {

  id: number;
  ausencia : Ausencia;

  constructor(private route: ActivatedRoute, private ausenciaService: AusenciaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ausencia = new Ausencia();
    this.ausenciaService.obtenerAusenciaporId(this.id).subscribe(dato => {
      this.ausencia = dato;
      Swal.fire(`Detalles de la ausencia  ${this.ausencia.nombre_empleado}`);
    });
  }
}
