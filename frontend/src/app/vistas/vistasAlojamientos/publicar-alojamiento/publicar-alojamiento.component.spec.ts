import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarAlojamientoComponent } from './publicar-alojamiento.component';

describe('PublicarAlojamientoComponent', () => {
  let component: PublicarAlojamientoComponent;
  let fixture: ComponentFixture<PublicarAlojamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarAlojamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarAlojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
