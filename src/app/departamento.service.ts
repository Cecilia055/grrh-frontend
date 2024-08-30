import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from './departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  
  //Esta URL obtiene el listado  de todos los departamentos en el backend
  private baseURL = "http://localhost:8000/departamentos" ;  

  constructor(private httpClient : HttpClient) { }

  //Este metodo nos sirve para obtener los departamentos
  obtenerListaDepartamentos():Observable<Departamento[]>{
    return this.httpClient.get<Departamento[]>(`${this.baseURL}`);
  }

  //Este metodo nos sirve para registrar un departamento
 registrarDepartamento(departamento : Departamento) : Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, departamento);

 }

  //este metodo sirve para actualizar el departamento
  actualizarDepartamento(id: number, departamento: Departamento): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, departamento);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerDepartamentoporId(id: number): Observable<Departamento> {
    return this.httpClient.get<Departamento>(`${this.baseURL}/${id}`);
  }

  eliminarDepartamento(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
