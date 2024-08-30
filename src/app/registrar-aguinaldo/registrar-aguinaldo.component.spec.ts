import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAguinaldoComponent } from './registrar-aguinaldo.component';

describe('RegistrarAguinaldoComponent', () => {
  let component: RegistrarAguinaldoComponent;
  let fixture: ComponentFixture<RegistrarAguinaldoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarAguinaldoComponent]
    });
    fixture = TestBed.createComponent(RegistrarAguinaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
