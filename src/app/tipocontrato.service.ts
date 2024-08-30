import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipocontrato } from './tipocontrato';

@Injectable({
  providedIn: 'root'
})
export class TipocontratoService {

  //Esta URL obtiene el listado  de todos los empleados en el backend
 private baseURL = "http://localhost:8000/tiposcontratos" ;  

 constructor(private httpClient : HttpClient) { }

 //Este metodo nos sirve para obtener los empleados
 obtenerListaTipoContrato():Observable<Tipocontrato[]>{
   return this.httpClient.get<Tipocontrato[]>(`${this.baseURL}`);
 }

 //Este metodo nos sirve para registrar un empleado
 registrarTipoContrato(tipocontrato : Tipocontrato) : Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, tipocontrato);

 }

  //este metodo sirve para actualizar el departamento
  actualizarTipoContrato(id: number, tipocontrato: Tipocontrato): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, tipocontrato);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerTipoContratoporId(id: number): Observable<Tipocontrato> {
    return this.httpClient.get<Tipocontrato>(`${this.baseURL}/${id}`);
  }

  eliminarTipoContrato(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}


