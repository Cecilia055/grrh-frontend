import { Component, OnInit } from '@angular/core';
import { Departamento } from '../departamento';
import { DepartamentoService } from '../departamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-departamento',
  templateUrl: './registrar-departamento.component.html',
  styleUrls: ['./registrar-departamento.component.css']
})
export class RegistrarDepartamentoComponent implements OnInit {

  departamento : Departamento = new Departamento();

  constructor(private departamentoservice : DepartamentoService, private router:Router) { }

  ngOnInit(): void {  
  }

  guardarDepartamento(){
    this.departamentoservice.registrarDepartamento(this.departamento).subscribe(dato =>{
      console.log(dato);
      this.irAlaListaDepartamento();
    }, Error => console.log(Error));
  }

  irAlaListaDepartamento(){
    this.router.navigate(['/departamentos']);
  }

  onSubmit(){
   this.guardarDepartamento();
  }

}
