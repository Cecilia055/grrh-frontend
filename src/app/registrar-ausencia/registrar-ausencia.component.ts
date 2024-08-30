import { Component, OnInit } from '@angular/core';
import { Ausencia } from '../ausencia';
import { AusenciaService } from '../ausencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-ausencia',
  templateUrl: './registrar-ausencia.component.html',
  styleUrls: ['./registrar-ausencia.component.css']
})
export class RegistrarAusenciaComponent implements OnInit {

  ausencia : Ausencia = new Ausencia();

  constructor(private ausenciaService : AusenciaService, private router:Router) { }

  ngOnInit(): void {  
  }

  guardarAusencia(){
    this.ausenciaService.registrarAusencia(this.ausencia).subscribe(dato =>{
      console.log(dato);
      this.irAlaListaAusencia();
    }, Error => console.log(Error));
  }

  irAlaListaAusencia(){
    this.router.navigate(['/ausencias']);
  }

  onSubmit(){
   this.guardarAusencia();
   
  }


}



