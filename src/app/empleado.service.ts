import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';
import { Aguinaldo } from './aguinaldo';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

 //Esta URL obtiene el listado  de todos los empleados en el backend
 private baseURL = "http://localhost:8000/empleados" ;  

 constructor(private httpClient : HttpClient) { }

 //Este metodo nos sirve para obtener los empleados
 obtenerListaEmpleado():Observable<Empleado[]>{
   return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
 }

 //Este metodo nos sirve para registrar un empleado
 registrarEmpleado(empleado : Empleado) : Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, empleado);

 }

  //este metodo sirve para actualizar el departamento
  actualizarEmpleado(id: number, empleado: Empleado): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, empleado);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerEmpleadoporId(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  eliminarEmpleado(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
