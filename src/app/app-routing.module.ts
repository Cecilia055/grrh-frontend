import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDepartamentoComponent } from './lista-departamento/lista-departamento.component';
import { RegistrarDepartamentoComponent } from './registrar-departamento/registrar-departamento.component';
import { ActualizarDepartamentoComponent } from './actualizar-departamento/actualizar-departamento.component';
import { DetalleDepartamentoComponent } from './detalle-departamento/detalle-departamento.component';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';
import { ListaDetallePlanillaComponent } from './lista-detalle-planilla/lista-detalle-planilla.component';
import { RegistrarDetalleplanillaComponent } from './registrar-detalleplanilla/registrar-detalleplanilla.component';
import { ActualizarDetalleplanillaComponent } from './actualizar-detalleplanilla/actualizar-detalleplanilla.component';
import { DetalleDetalleplanillaComponent } from './detalle-detalleplanilla/detalle-detalleplanilla.component';
import { ListaAguinaldoComponent } from './lista-aguinaldo/lista-aguinaldo.component';
import { RegistrarAguinaldoComponent } from './registrar-aguinaldo/registrar-aguinaldo.component';
import { ActualizarAguinaldoComponent } from './actualizar-aguinaldo/actualizar-aguinaldo.component';
import { DetalleAguinaldoComponent } from './detalle-aguinaldo/detalle-aguinaldo.component';
import { ListaAusenciaComponent } from './lista-ausencia/lista-ausencia.component';
import { RegistrarAusenciaComponent } from './registrar-ausencia/registrar-ausencia.component';
import { ActualizarAusenciaComponent } from './actualizar-ausencia/actualizar-ausencia.component';
import { DetalleAusenciaComponent } from './detalle-ausencia/detalle-ausencia.component';
import { ListaTipocontratoComponent } from './lista-tipocontrato/lista-tipocontrato.component';
import { RegistrarTipocontratoComponent } from './registrar-tipocontrato/registrar-tipocontrato.component';
import { ActualizarTipocontratoComponent } from './actualizar-tipocontrato/actualizar-tipocontrato.component';
import { DetalleTipocontratoComponent } from './detalle-tipocontrato/detalle-tipocontrato.component';
import { ListaTipodocumentoComponent } from './lista-tipodocumento/lista-tipodocumento.component';
import { RegistrarTipodocumentoComponent } from './registrar-tipodocumento/registrar-tipodocumento.component';
import { ActualizarTipodocumentoComponent } from './actualizar-tipodocumento/actualizar-tipodocumento.component';
import { DetalleTipodocumentoComponent } from './detalle-tipodocumento/detalle-tipodocumento.component';

const routes: Routes = [
  {path : 'departamentos', component : ListaDepartamentoComponent},
  {path : '',redirectTo: 'departamentos', pathMatch : 'full'},
  {path : 'registrar-departamento', component : RegistrarDepartamentoComponent},
  {path : 'actualizar-departamento/:iddepartamento',component : ActualizarDepartamentoComponent},
  {path : 'detalle-departamento/:iddepartamento',component : DetalleDepartamentoComponent},
  {path : 'empleados', component : ListaEmpleadoComponent},
  {path : '',redirectTo: 'empleados', pathMatch : 'full'},
  {path : 'registrar-empleado', component : RegistrarEmpleadoComponent},
  {path : 'actualizar-empleado/:id',component : ActualizarEmpleadoComponent},
  {path : 'detalle-empleado/:id',component : DetalleEmpleadoComponent},
  {path : 'detallesplanillas', component : ListaDetallePlanillaComponent},
  {path : '',redirectTo: 'detallesplanillas', pathMatch : 'full'},
  {path : 'registrar-detalleplanilla', component : RegistrarDetalleplanillaComponent},
  {path : 'actualizar-detalleplanilla/:id',component : ActualizarDetalleplanillaComponent},
  {path : 'detalle-detalleplanilla/:id',component : DetalleDetalleplanillaComponent},
  {path : 'aguinaldos', component : ListaAguinaldoComponent},
  {path : '',redirectTo: 'aguinaldos', pathMatch : 'full'},
  {path : 'registrar-aguinaldo', component : RegistrarAguinaldoComponent},
  {path : 'actualizar-aguinaldo/:id',component : ActualizarAguinaldoComponent},
  {path : 'detalle-aguinaldo/:id',component : DetalleAguinaldoComponent},
  {path : 'ausencias', component : ListaAusenciaComponent},
  {path : '',redirectTo: 'ausencias', pathMatch : 'full'},
  {path : 'registrar-ausencia', component : RegistrarAusenciaComponent},
  {path : 'actualizar-ausencia/:id',component : ActualizarAusenciaComponent},
  {path : 'detalle-ausencia/:id',component : DetalleAusenciaComponent},
  {path : 'tiposcontratos', component : ListaTipocontratoComponent},
  {path : '',redirectTo: 'tiposcontratos', pathMatch : 'full'},
  {path : 'registrar-tipocontrato', component : RegistrarTipocontratoComponent},
  {path : 'actualizar-tipocontrato/:id',component : ActualizarTipocontratoComponent},
  {path : 'detalle-tipocontrato/:id',component : DetalleTipocontratoComponent},
  {path : 'tiposdocumentos', component : ListaTipodocumentoComponent},
  {path : '',redirectTo: 'tiposdocumentos', pathMatch : 'full'},
  {path : 'registrar-tipodocumento', component : RegistrarTipodocumentoComponent}, 
  {path : 'actualizar-tipodocumento/:id',component : ActualizarTipodocumentoComponent},
  {path : 'detalle-tipodocumento/:id',component : DetalleTipodocumentoComponent}
  

  
 
  

 
 
 
 
 
  
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
