import { DecimalPipe } from "@angular/common";

export class DetallePlanilla {

iddetalleplanilla: number;
nombre_empleado: string;
id_empleado: number;
id_planilla:number;
salario_mensual: DecimalPipe;
aguinaldo: DecimalPipe; 
bonificacion : DecimalPipe;
deduccionAFP : DecimalPipe;
deduccionISSS: DecimalPipe;
deduccionrenta:DecimalPipe;
descuentos : DecimalPipe;
prestamos : DecimalPipe;
salario_neto : DecimalPipe;
fecha_pago : Date;
observaciones : string;
fecha_creacion : Date;
nombre_empleadoque_elaboro : string;
nombre_empleado_autorizo : string;

}
