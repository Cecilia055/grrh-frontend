import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetallePlanilla } from './detalle-planilla';

@Injectable({
  providedIn: 'root'
})
export class DetallePlanillaService {

 //Esta URL obtiene el listado  de todos los departamentos en el backend
 private baseURL = "http://localhost:8000/detallesplanillas" ;  

 constructor(private httpClient : HttpClient) { }

 //Este metodo nos sirve para obtener los departamentos
 obtenerListaDetallePlanilla():Observable<DetallePlanilla[]>{
   return this.httpClient.get<DetallePlanilla[]>(`${this.baseURL}`);
 }

 //Este metodo nos sirve para registrar un departamento
registrarDetallePlanilla(detallePlanilla : DetallePlanilla) : Observable<Object>{
 return this.httpClient.post(`${this.baseURL}`, detallePlanilla);

}

 //este metodo sirve para actualizar el departamento
 actualizarDetallePlanilla(id: number, detallePlanilla: DetallePlanilla): Observable<Object> {
   return this.httpClient.put(`${this.baseURL}/${id}`, detallePlanilla);
 }

 //este metodo sirve para obtener o buscar un empleado
 obtenerDetallePlanillaPorId(id: number): Observable<DetallePlanilla> {
   return this.httpClient.get<DetallePlanilla>(`${this.baseURL}/${id}`);
 }

 eliminarDetallePlanilla(id: number): Observable<Object> {
   return this.httpClient.delete(`${this.baseURL}/${id}`);
 }
}
