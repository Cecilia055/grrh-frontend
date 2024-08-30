import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTipodocumentoComponent } from './registrar-tipodocumento.component';

describe('RegistrarTipodocumentoComponent', () => {
  let component: RegistrarTipodocumentoComponent;
  let fixture: ComponentFixture<RegistrarTipodocumentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarTipodocumentoComponent]
    });
    fixture = TestBed.createComponent(RegistrarTipodocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
