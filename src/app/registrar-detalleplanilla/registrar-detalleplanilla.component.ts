import { Component, OnInit } from '@angular/core';
import { DetallePlanilla } from '../detalle-planilla';
import { DetallePlanillaService } from '../detalle-planilla.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-detalleplanilla',
  templateUrl: './registrar-detalleplanilla.component.html',
  styleUrls: ['./registrar-detalleplanilla.component.css']
})
export class RegistrarDetalleplanillaComponent implements OnInit {

  detalleplanilla : DetallePlanilla = new DetallePlanilla();

  constructor(private detalleplanillaService : DetallePlanillaService, private router:Router) { }

  ngOnInit(): void {  
  }

  guardarDetallePlanilla(){
    this.detalleplanillaService.registrarDetallePlanilla(this.detalleplanilla).subscribe(dato =>{
      console.log(dato);
      this.irAlaListaDetallePlanilla();
    }, Error => console.log(Error));
  }

  irAlaListaDetallePlanilla(){
    this.router.navigate(['/detallesplanillas']);
  }

  onSubmit(){
   this.guardarDetallePlanilla();
  }


}
