import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Tipodocumento } from './tipodocumento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipodocumentoService  {

 //Esta URL obtiene el listado  de todos los empleados en el backend
 private baseURL = "http://localhost:8000/tiposdocumentos" ;  

 constructor(private httpClient : HttpClient) { }

 //Este metodo nos sirve para obtener los empleados
 obtenerListaTipoDocumento():Observable<Tipodocumento[]>{
   return this.httpClient.get<Tipodocumento[]>(`${this.baseURL}`);
 }

 //Este metodo nos sirve para registrar un empleado
 registrarTipoDocumento(tipodocumento : Tipodocumento) : Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, tipodocumento);

 }

  //este metodo sirve para actualizar el departamento
  actualizarTipoDocumento(id: number, tipodocumento: Tipodocumento): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, tipodocumento);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerTipoDocumentoporId(id: number): Observable<Tipodocumento> {
    return this.httpClient.get<Tipodocumento>(`${this.baseURL}/${id}`);
  }

  eliminarTipoDocumento(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}



 

