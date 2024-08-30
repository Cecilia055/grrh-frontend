import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDetallePlanillaComponent } from './lista-detalle-planilla.component';

describe('ListaDetallePlanillaComponent', () => {
  let component: ListaDetallePlanillaComponent;
  let fixture: ComponentFixture<ListaDetallePlanillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDetallePlanillaComponent]
    });
    fixture = TestBed.createComponent(ListaDetallePlanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
