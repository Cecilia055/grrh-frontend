import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bonificacion } from './bonificacion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BonificacionService {

 //Esta URL obtiene el listado  de todos los empleados en el backend
 private baseURL = "http://localhost:8000/bonificaciones" ;  

 constructor(private httpClient : HttpClient) { }

 //Este metodo nos sirve para obtener los empleados
 obtenerListaBonificacion():Observable<Bonificacion[]>{
   return this.httpClient.get<Bonificacion[]>(`${this.baseURL}`);
 }

 //Este metodo nos sirve para registrar un empleado
 registrarBonificacion(bonificacion : Bonificacion) : Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, bonificacion);

 }

  //este metodo sirve para actualizar el departamento
  actualizarBonificacion(id: number, bonificacion: Bonificacion): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, bonificacion);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerBonificacionporId(id: number): Observable<Bonificacion> {
    return this.httpClient.get<Bonificacion>(`${this.baseURL}/${id}`);
  }

  eliminarBonificacion(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}



 


