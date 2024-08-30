import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarBonificacionComponent } from './registrar-bonificacion.component';

describe('RegistrarBonificacionComponent', () => {
  let component: RegistrarBonificacionComponent;
  let fixture: ComponentFixture<RegistrarBonificacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarBonificacionComponent]
    });
    fixture = TestBed.createComponent(RegistrarBonificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
