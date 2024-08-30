import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAusenciaComponent } from './detalle-ausencia.component';

describe('DetalleAusenciaComponent', () => {
  let component: DetalleAusenciaComponent;
  let fixture: ComponentFixture<DetalleAusenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleAusenciaComponent]
    });
    fixture = TestBed.createComponent(DetalleAusenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
