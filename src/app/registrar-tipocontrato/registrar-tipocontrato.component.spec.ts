import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTipocontratoComponent } from './registrar-tipocontrato.component';

describe('RegistrarTipocontratoComponent', () => {
  let component: RegistrarTipocontratoComponent;
  let fixture: ComponentFixture<RegistrarTipocontratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarTipocontratoComponent]
    });
    fixture = TestBed.createComponent(RegistrarTipocontratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
