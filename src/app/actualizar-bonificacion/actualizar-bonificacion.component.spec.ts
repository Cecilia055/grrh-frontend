import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarBonificacionComponent } from './actualizar-bonificacion.component';

describe('ActualizarBonificacionComponent', () => {
  let component: ActualizarBonificacionComponent;
  let fixture: ComponentFixture<ActualizarBonificacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarBonificacionComponent]
    });
    fixture = TestBed.createComponent(ActualizarBonificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
