import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTipocontratoComponent } from './actualizar-tipocontrato.component';

describe('ActualizarTipocontratoComponent', () => {
  let component: ActualizarTipocontratoComponent;
  let fixture: ComponentFixture<ActualizarTipocontratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarTipocontratoComponent]
    });
    fixture = TestBed.createComponent(ActualizarTipocontratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
