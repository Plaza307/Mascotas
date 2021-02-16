import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaComerciosComponent } from './vista-comercios.component';

describe('VistaComerciosComponent', () => {
  let component: VistaComerciosComponent;
  let fixture: ComponentFixture<VistaComerciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaComerciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaComerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
