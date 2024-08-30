import { Component, OnInit } from '@angular/core';
import { Ausencia } from '../ausencia';
import { AusenciaService } from '../ausencia.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-ausencia',
  templateUrl: './lista-ausencia.component.html',
  styleUrls: ['./lista-ausencia.component.css']
})
export class ListaAusenciaComponent implements OnInit{

  ausencias : Ausencia [];

  constructor( private ausenciaService: AusenciaService, private router: Router) {}
  
  ngOnInit(): void {
   this.obtenerAusencia();
  }
  
  actualizarAusencia(id: number) {
    this.router.navigate(['actualizar-ausencia', id]);
  }
  
  private obtenerAusencia(){
    this.ausenciaService.obtenerListaAusencia().subscribe(dato =>{
     this.ausencias = dato;
    });
  }
  
  eliminarAusencia(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Confirma si deseas eliminar la ausencia",
      icon: 'warning', // Cambiado 'type' a 'icon'
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.ausenciaService.eliminarAusencia(id).subscribe(dato => {
          console.log(dato);
          this.obtenerAusencia();
          Swal.fire(
            'Ausencia eliminada',
            'La ausencia ha sido eliminada con exito',
            'success'
          )
        })
      }
    });
  }
  
  verDetallesDeAusencia(id: number) {
    this.router.navigate(['detalle-ausencia', id]);
  }
  }
  
  
  
  


