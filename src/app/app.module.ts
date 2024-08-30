import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDepartamentoComponent } from './lista-departamento/lista-departamento.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistrarDepartamentoComponent } from './registrar-departamento/registrar-departamento.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ActualizarDepartamentoComponent } from './actualizar-departamento/actualizar-departamento.component';
import { DetalleDepartamentoComponent } from './detalle-departamento/detalle-departamento.component';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';
import { ListaDetallePlanillaComponent } from './lista-detalle-planilla/lista-detalle-planilla.component';
import { RegistrarDetalleplanillaComponent } from './registrar-detalleplanilla/registrar-detalleplanilla.component';
import { DetalleDetalleplanillaComponent } from './detalle-detalleplanilla/detalle-detalleplanilla.component';
import { ActualizarDetalleplanillaComponent } from './actualizar-detalleplanilla/actualizar-detalleplanilla.component';
import { ListaAguinaldoComponent } from './lista-aguinaldo/lista-aguinaldo.component';
import { ActualizarAguinaldoComponent } from './actualizar-aguinaldo/actualizar-aguinaldo.component';
import { RegistrarAguinaldoComponent } from './registrar-aguinaldo/registrar-aguinaldo.component';
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
import { ListaBonificacionComponent } from './lista-bonificacion/lista-bonificacion.component';
import { RegistrarBonificacionComponent } from './registrar-bonificacion/registrar-bonificacion.component';
import { ActualizarBonificacionComponent } from './actualizar-bonificacion/actualizar-bonificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDepartamentoComponent,
    RegistrarDepartamentoComponent,
    ActualizarDepartamentoComponent,
    DetalleDepartamentoComponent,
    ListaEmpleadoComponent,
    RegistrarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    DetalleEmpleadoComponent,
    ListaDetallePlanillaComponent,
    RegistrarDetalleplanillaComponent,
    DetalleDetalleplanillaComponent,
    ActualizarDetalleplanillaComponent,
    ListaAguinaldoComponent,
    ActualizarAguinaldoComponent,
    RegistrarAguinaldoComponent,
    DetalleAguinaldoComponent,
    ListaAusenciaComponent,
    RegistrarAusenciaComponent,
    ActualizarAusenciaComponent,
    DetalleAusenciaComponent,
    ListaTipocontratoComponent,
    RegistrarTipocontratoComponent,
    ActualizarTipocontratoComponent,
    DetalleTipocontratoComponent,
    ListaTipodocumentoComponent,
    RegistrarTipodocumentoComponent,
    ActualizarTipodocumentoComponent,
    DetalleTipodocumentoComponent,
    ListaBonificacionComponent,
    RegistrarBonificacionComponent,
    ActualizarBonificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
