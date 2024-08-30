import { Component, OnInit } from '@angular/core';
import { Tipodocumento } from '../tipodocumento';
import { TipodocumentoService } from '../tipodocumento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-tipodocumento',
  templateUrl: './registrar-tipodocumento.component.html',
  styleUrls: ['./registrar-tipodocumento.component.css']
})
export class RegistrarTipodocumentoComponent implements OnInit{


  tipodocumento : Tipodocumento = new Tipodocumento();

  constructor(private tipodocumentoService : TipodocumentoService, private router:Router
  ) { }

  ngOnInit(): void {  
  }

  guardarTipoDocumento(){
    this.tipodocumentoService.registrarTipoDocumento(this.tipodocumento).subscribe(dato =>{
      console.log(dato);
      this.irAlaListaTipoDocumento();
    }, Error => console.log(Error));
  }

  irAlaListaTipoDocumento(){
    this.router.navigate(['/tiposdocumentos']);
  }

  onSubmit(){
   this.guardarTipoDocumento();
   
  }

}

