import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaApartamentosComponent } from './vista-apartamentos.component';

describe('VistaApartamentosComponent', () => {
  let component: VistaApartamentosComponent;
  let fixture: ComponentFixture<VistaApartamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaApartamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaApartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
