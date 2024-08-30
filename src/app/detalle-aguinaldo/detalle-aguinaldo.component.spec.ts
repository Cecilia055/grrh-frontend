import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAguinaldoComponent } from './detalle-aguinaldo.component';

describe('DetalleAguinaldoComponent', () => {
  let component: DetalleAguinaldoComponent;
  let fixture: ComponentFixture<DetalleAguinaldoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleAguinaldoComponent]
    });
    fixture = TestBed.createComponent(DetalleAguinaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
