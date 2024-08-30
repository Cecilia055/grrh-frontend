import { Component, OnInit } from '@angular/core';
import { Bonificacion } from '../bonificacion';
import { BonificacionService } from '../bonificacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-bonificacion',
  templateUrl: './registrar-bonificacion.component.html',
  styleUrls: ['./registrar-bonificacion.component.css']
})
export class RegistrarBonificacionComponent implements OnInit {

  bonificacion : Bonificacion = new Bonificacion();

  constructor(private bonificacionService : BonificacionService, private router:Router) { }

  ngOnInit(): void {  
  }

  guardarBonificacion(){
    this.bonificacionService.registrarBonificacion(this.bonificacion).subscribe(dato =>{
      console.log(dato);
      this.irAlaListaBonificacion();
    }, Error => console.log(Error));
  }

  irAlaListaBonificacion(){
    this.router.navigate(['/bonificaciones']);
  }

  onSubmit(){
   this.guardarBonificacion();
   
  }


}






