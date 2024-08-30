import { Component, OnInit } from '@angular/core';
import { Aguinaldo } from '../aguinaldo';
import { AguinaldoService } from '../aguinaldo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-aguinaldo',
  templateUrl: './registrar-aguinaldo.component.html',
  styleUrls: ['./registrar-aguinaldo.component.css']
})
export class RegistrarAguinaldoComponent implements OnInit {

  aguinaldo : Aguinaldo = new Aguinaldo();

  constructor(private aguinaldoService : AguinaldoService, private router:Router) { }

  ngOnInit(): void {  
  }

  guardarAguinaldo(){
    this.aguinaldoService.registrarAguinaldo(this.aguinaldo).subscribe(dato =>{
      console.log(dato);
      this.irAlaListaAguinaldo();
    }, Error => console.log(Error));
  }

  irAlaListaAguinaldo(){
    this.router.navigate(['/aguinaldos']);
  }

  onSubmit(){
   this.guardarAguinaldo();
   
  }


}

