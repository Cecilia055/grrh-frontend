import { Component, OnInit } from '@angular/core';
import { BonificacionService } from '../bonificacion.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Bonificacion } from '../bonificacion';

@Component({
  selector: 'app-lista-bonificacion',
  templateUrl: './lista-bonificacion.component.html',
  styleUrls: ['./lista-bonificacion.component.css']
})
export class ListaBonificacionComponent implements OnInit{
  
  bonificacion : Bonificacion [];

  constructor( private bonificacionService: BonificacionService, private router: Router) {}
  
  ngOnInit(): void {
   this.obtenerBonificacion();
  }
  
  actualizarBonificacion(id: number) {
    this.router.navigate(['actualizar-bonificacion', id]);
  }
  
  private obtenerBonificacion(){
    this.bonificacionService.obtenerListaBonificacion().subscribe(dato =>{
     this.bonificacion = dato;
    });
  }
  
  eliminarBonificacion(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Confirma si deseas eliminar la bonificacion",
      icon: 'warning', // Cambiado 'type' a 'icon'
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.bonificacionService.eliminarBonificacion(id).subscribe(dato => {
          console.log(dato);
          this.obtenerBonificacion();
          Swal.fire(
            'Bonificacion eliminada',
            'La bonificacion ha sido eliminada con exito',
            'success'
          )
        })
      }
    });
  }
  
  verDetallesDeBonificacion(id: number) {
    this.router.navigate(['detalle-bonificacion', id]);
  }
  }
  
  
  
  






