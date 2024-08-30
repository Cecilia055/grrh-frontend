import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBonificacionComponent } from './lista-bonificacion.component';

describe('ListaBonificacionComponent', () => {
  let component: ListaBonificacionComponent;
  let fixture: ComponentFixture<ListaBonificacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaBonificacionComponent]
    });
    fixture = TestBed.createComponent(ListaBonificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
