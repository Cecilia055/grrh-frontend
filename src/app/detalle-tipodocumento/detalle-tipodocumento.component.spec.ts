import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTipodocumentoComponent } from './detalle-tipodocumento.component';

describe('DetalleTipodocumentoComponent', () => {
  let component: DetalleTipodocumentoComponent;
  let fixture: ComponentFixture<DetalleTipodocumentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleTipodocumentoComponent]
    });
    fixture = TestBed.createComponent(DetalleTipodocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
