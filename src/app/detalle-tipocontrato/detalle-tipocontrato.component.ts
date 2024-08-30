import { Component, OnInit } from '@angular/core';
import { Tipocontrato } from '../tipocontrato';
import { ActivatedRoute } from '@angular/router';
import { TipocontratoService } from '../tipocontrato.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-tipocontrato',
  templateUrl: './detalle-tipocontrato.component.html',
  styleUrls: ['./detalle-tipocontrato.component.css']
})
export class DetalleTipocontratoComponent implements OnInit {

  id: number;
  tipocontrato: Tipocontrato;

  constructor(private route: ActivatedRoute, private tipocontratoService: TipocontratoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tipocontrato = new Tipocontrato();
    this.tipocontratoService.obtenerTipoContratoporId(this.id).subscribe(dato => {
      this.tipocontrato = dato;
      Swal.fire(`Detalles del Tipo de  Contrato  ${this.tipocontrato.nombre}`);
    });
  }

}
