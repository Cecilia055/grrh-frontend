import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAusenciaComponent } from './lista-ausencia.component';

describe('ListaAusenciaComponent', () => {
  let component: ListaAusenciaComponent;
  let fixture: ComponentFixture<ListaAusenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAusenciaComponent]
    });
    fixture = TestBed.createComponent(ListaAusenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
