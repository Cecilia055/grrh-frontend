import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDetalleplanillaComponent } from './detalle-detalleplanilla.component';

describe('DetalleDetalleplanillaComponent', () => {
  let component: DetalleDetalleplanillaComponent;
  let fixture: ComponentFixture<DetalleDetalleplanillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleDetalleplanillaComponent]
    });
    fixture = TestBed.createComponent(DetalleDetalleplanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
