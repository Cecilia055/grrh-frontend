import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAguinaldoComponent } from './actualizar-aguinaldo.component';

describe('ActualizarAguinaldoComponent', () => {
  let component: ActualizarAguinaldoComponent;
  let fixture: ComponentFixture<ActualizarAguinaldoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarAguinaldoComponent]
    });
    fixture = TestBed.createComponent(ActualizarAguinaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
