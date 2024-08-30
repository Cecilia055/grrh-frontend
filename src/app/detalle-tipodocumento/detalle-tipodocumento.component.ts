import { Component, OnInit } from '@angular/core';
import { Tipodocumento } from '../tipodocumento';
import { TipodocumentoService } from '../tipodocumento.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-tipodocumento',
  templateUrl: './detalle-tipodocumento.component.html',
  styleUrls: ['./detalle-tipodocumento.component.css']
})
export class DetalleTipodocumentoComponent implements OnInit {

  id: number;
  tipodocumento: Tipodocumento;

  constructor(private route: ActivatedRoute, private tipodocumentoService: TipodocumentoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tipodocumento = new Tipodocumento();
    this.tipodocumentoService.obtenerTipoDocumentoporId(this.id).subscribe(dato => {
      this.tipodocumento = dato;
      Swal.fire(`Detalles del Tipo de  documento  ${this.tipodocumento.tipo}`);
    });
  }

}
