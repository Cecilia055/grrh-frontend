import { DecimalPipe } from "@angular/common";

export class Aguinaldo {

idaguinaldo : number; 
nombre_empleado: string;
id_empleado : number;
anio : number;
salario_base : DecimalPipe;
dias_aguinaldos : number;
monto_aguinaldo : DecimalPipe;
fecha_creacion : Date;

}
