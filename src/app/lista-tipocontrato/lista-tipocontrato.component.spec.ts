import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipocontratoComponent } from './lista-tipocontrato.component';

describe('ListaTipocontratoComponent', () => {
  let component: ListaTipocontratoComponent;
  let fixture: ComponentFixture<ListaTipocontratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaTipocontratoComponent]
    });
    fixture = TestBed.createComponent(ListaTipocontratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
