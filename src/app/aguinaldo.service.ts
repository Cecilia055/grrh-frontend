import { Injectable } from '@angular/core';
import { Aguinaldo } from './aguinaldo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AguinaldoService {

  //Esta URL obtiene el listado  de todos los empleados en el backend
 private baseURL = "http://localhost:8000/aguinaldos" ;  

 constructor(private httpClient : HttpClient) { }

 //Este metodo nos sirve para obtener los empleados
 obtenerListaAguinaldo():Observable<Aguinaldo[]>{
   return this.httpClient.get<Aguinaldo[]>(`${this.baseURL}`);
 }

 //Este metodo nos sirve para registrar un empleado
 registrarAguinaldo(aguinaldo : Aguinaldo) : Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, aguinaldo);

 }

  //este metodo sirve para actualizar el departamento
  actualizarAguinaldo(id: number, aguinaldo: Aguinaldo): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, aguinaldo);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerAguinaldoporId(id: number): Observable<Aguinaldo> {
    return this.httpClient.get<Aguinaldo>(`${this.baseURL}/${id}`);
  }

  eliminarAguinaldo(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

