import { Component, OnInit } from '@angular/core';
import { Tipodocumento } from '../tipodocumento';
import { TipodocumentoService } from '../tipodocumento.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tipodocumento',
  templateUrl: './lista-tipodocumento.component.html',
  styleUrls: ['./lista-tipodocumento.component.css']
})
export class ListaTipodocumentoComponent implements OnInit {

  tipodocumento : Tipodocumento [];

  constructor( private tipoDocumentoService: TipodocumentoService, private router: Router) {}
  
  ngOnInit(): void {
   this.obtenerTipoDocumento();
  }
  
  actualizarTipoDocumento(id: number) {
    this.router.navigate(['actualizar-tipodocumento', id]);
  }
  
  private obtenerTipoDocumento(){
    this.tipoDocumentoService.obtenerListaTipoDocumento().subscribe(dato =>{
     this.tipodocumento = dato;
    });
  }
  
  eliminarTipoDocumento(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Confirma si deseas eliminar el tipo de documento",
      icon: 'warning', // Cambiado 'type' a 'icon'
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.tipoDocumentoService.eliminarTipoDocumento(id).subscribe(dato => {
          console.log(dato);
          this.obtenerTipoDocumento();
          Swal.fire(
            'Tipo de Documento eliminado',
            'El Tipo de Documento ha sido eliminado con exito',
            'success'
          )
        })
      }
    });
  }
  
  verDetallesDelTipodeDocumento(id: number) {
    this.router.navigate(['detalle-tipodocumento', id]);
  }
  }
  
  
  
  



