import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAguinaldoComponent } from './lista-aguinaldo.component';

describe('ListaAguinaldoComponent', () => {
  let component: ListaAguinaldoComponent;
  let fixture: ComponentFixture<ListaAguinaldoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAguinaldoComponent]
    });
    fixture = TestBed.createComponent(ListaAguinaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
