import { Component, OnInit } from '@angular/core';
import { TipocontratoService } from '../tipocontrato.service';
import { Router } from '@angular/router';
import { Tipocontrato } from '../tipocontrato';

@Component({
  selector: 'app-registrar-tipocontrato',
  templateUrl: './registrar-tipocontrato.component.html',
  styleUrls: ['./registrar-tipocontrato.component.css']
})
export class RegistrarTipocontratoComponent implements OnInit {

  tipocontrato : Tipocontrato = new Tipocontrato();

  constructor(private tipocontratoService : TipocontratoService, private router:Router) { }

  ngOnInit(): void {  
  }

  guardarTipoContrato(){
    this.tipocontratoService.registrarTipoContrato(this.tipocontrato).subscribe(dato =>{
      console.log(dato);
      this.irAlaListaTipoContrato();
    }, Error => console.log(Error));
  }

  irAlaListaTipoContrato(){
    this.router.navigate(['/tiposcontratos']);
  }

  onSubmit(){
   this.guardarTipoContrato();
   
  }

}
