import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTipocontratoComponent } from './detalle-tipocontrato.component';

describe('DetalleTipocontratoComponent', () => {
  let component: DetalleTipocontratoComponent;
  let fixture: ComponentFixture<DetalleTipocontratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleTipocontratoComponent]
    });
    fixture = TestBed.createComponent(DetalleTipocontratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
