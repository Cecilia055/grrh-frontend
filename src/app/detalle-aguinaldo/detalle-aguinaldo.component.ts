import { Component, OnInit } from '@angular/core';
import { Aguinaldo } from '../aguinaldo';
import { ActivatedRoute } from '@angular/router';
import { AguinaldoService } from '../aguinaldo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-aguinaldo',
  templateUrl: './detalle-aguinaldo.component.html',
  styleUrls: ['./detalle-aguinaldo.component.css']
})
export class DetalleAguinaldoComponent implements OnInit {

  id: number;
  aguinaldo : Aguinaldo;

  constructor(private route: ActivatedRoute, private aguinaldoService: AguinaldoService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.aguinaldo = new Aguinaldo();
    this.aguinaldoService.obtenerAguinaldoporId(this.id).subscribe(dato => {
      this.aguinaldo = dato;
      Swal.fire(`Detalles del Aguinaldo  ${this.aguinaldo.nombre_empleado}`);
    });
  }

}
