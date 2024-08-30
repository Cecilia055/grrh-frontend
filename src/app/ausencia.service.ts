import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ausencia } from './ausencia';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AusenciaService {

   //Esta URL obtiene el listado  de todos los empleados en el backend
 private baseURL = "http://localhost:8000/ausencias" ;  

 constructor(private httpClient : HttpClient) { }

 //Este metodo nos sirve para obtener los empleados
 obtenerListaAusencia():Observable<Ausencia[]>{
   return this.httpClient.get<Ausencia[]>(`${this.baseURL}`);
 }

 //Este metodo nos sirve para registrar un empleado
 registrarAusencia(ausencia : Ausencia) : Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, ausencia);

 }

  //este metodo sirve para actualizar el departamento
  actualizarAsencia(id: number, ausencia: Ausencia): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, ausencia);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerAusenciaporId(id: number): Observable<Ausencia> {
    return this.httpClient.get<Ausencia>(`${this.baseURL}/${id}`);
  }

  eliminarAusencia(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}


