import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDetalleplanillaComponent } from './actualizar-detalleplanilla.component';

describe('ActualizarDetalleplanillaComponent', () => {
  let component: ActualizarDetalleplanillaComponent;
  let fixture: ComponentFixture<ActualizarDetalleplanillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarDetalleplanillaComponent]
    });
    fixture = TestBed.createComponent(ActualizarDetalleplanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
