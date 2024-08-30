import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipodocumentoComponent } from './lista-tipodocumento.component';

describe('ListaTipodocumentoComponent', () => {
  let component: ListaTipodocumentoComponent;
  let fixture: ComponentFixture<ListaTipodocumentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaTipodocumentoComponent]
    });
    fixture = TestBed.createComponent(ListaTipodocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
