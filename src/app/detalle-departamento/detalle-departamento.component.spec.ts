import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDepartamentoComponent } from './detalle-departamento.component';

describe('DetalleDepartamentoComponent', () => {
  let component: DetalleDepartamentoComponent;
  let fixture: ComponentFixture<DetalleDepartamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleDepartamentoComponent]
    });
    fixture = TestBed.createComponent(DetalleDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
