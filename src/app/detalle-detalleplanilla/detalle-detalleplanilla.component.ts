import { Component, OnInit } from '@angular/core';
import { DetallePlanilla } from '../detalle-planilla';
import { ActivatedRoute } from '@angular/router';
import { DetallePlanillaService } from '../detalle-planilla.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-detalleplanilla',
  templateUrl: './detalle-detalleplanilla.component.html',
  styleUrls: ['./detalle-detalleplanilla.component.css']
})
export class DetalleDetalleplanillaComponent  implements OnInit{

  id: number;
 detalleplanilla : DetallePlanilla;

  constructor(private route: ActivatedRoute, private detalleplanillaService: DetallePlanillaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.detalleplanilla = new DetallePlanilla();
    this.detalleplanillaService.obtenerDetallePlanillaPorId(this.id).subscribe(dato => {
      this.detalleplanilla = dato;
      Swal.fire(`Detalles de Planillas  ${this.detalleplanilla.nombre_empleado}`);
    });
  }

}
