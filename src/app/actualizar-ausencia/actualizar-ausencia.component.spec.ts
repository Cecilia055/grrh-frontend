import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAusenciaComponent } from './actualizar-ausencia.component';

describe('ActualizarAusenciaComponent', () => {
  let component: ActualizarAusenciaComponent;
  let fixture: ComponentFixture<ActualizarAusenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarAusenciaComponent]
    });
    fixture = TestBed.createComponent(ActualizarAusenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
