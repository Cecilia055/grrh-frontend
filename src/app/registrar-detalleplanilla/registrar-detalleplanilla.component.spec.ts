import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDetalleplanillaComponent } from './registrar-detalleplanilla.component';

describe('RegistrarDetalleplanillaComponent', () => {
  let component: RegistrarDetalleplanillaComponent;
  let fixture: ComponentFixture<RegistrarDetalleplanillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarDetalleplanillaComponent]
    });
    fixture = TestBed.createComponent(RegistrarDetalleplanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
