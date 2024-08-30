import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAusenciaComponent } from './registrar-ausencia.component';

describe('RegistrarAusenciaComponent', () => {
  let component: RegistrarAusenciaComponent;
  let fixture: ComponentFixture<RegistrarAusenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarAusenciaComponent]
    });
    fixture = TestBed.createComponent(RegistrarAusenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
