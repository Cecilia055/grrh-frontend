import { Component, OnInit } from '@angular/core';
import { Tipocontrato } from '../tipocontrato';
import { TipocontratoService } from '../tipocontrato.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tipocontrato',
  templateUrl: './lista-tipocontrato.component.html',
  styleUrls: ['./lista-tipocontrato.component.css']
})
export class ListaTipocontratoComponent implements OnInit{

  tipocontrato : Tipocontrato [];

  constructor( private tipocontratoService: TipocontratoService, private router: Router) {}
  
  ngOnInit(): void {
   this.obtenerTipoContrato();
  }
  
  actualizarTipoContrato(id: number) {
    this.router.navigate(['actualizar-tipocontrato', id]);
  }
  
  private obtenerTipoContrato(){
    this.tipocontratoService.obtenerListaTipoContrato().subscribe(dato =>{
     this.tipocontrato = dato;
    });
  }
  
  eliminarTipoContrato(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Confirma si deseas eliminar el tipo de contrato",
      icon: 'warning', // Cambiado 'type' a 'icon'
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.tipocontratoService.eliminarTipoContrato(id).subscribe(dato => {
          console.log(dato);
          this.obtenerTipoContrato();
          Swal.fire(
            'Tipo de Contrato eliminado',
            'El Tipo de Contrato ha sido eliminado con exito',
            'success'
          )
        })
      }
    });
  }
  
  verDetallesDelTipodeContrato(id: number) {
    this.router.navigate(['detalle-tipocontrato', id]);
  }
  }
  
  
  
  

