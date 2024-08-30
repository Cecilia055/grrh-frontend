import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTipodocumentoComponent } from './actualizar-tipodocumento.component';

describe('ActualizarTipodocumentoComponent', () => {
  let component: ActualizarTipodocumentoComponent;
  let fixture: ComponentFixture<ActualizarTipodocumentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarTipodocumentoComponent]
    });
    fixture = TestBed.createComponent(ActualizarTipodocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
