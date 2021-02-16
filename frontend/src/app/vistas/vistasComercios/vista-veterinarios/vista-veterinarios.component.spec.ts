import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVeterinariosComponent } from './vista-veterinarios.component';

describe('VistaVeterinariosComponent', () => {
  let component: VistaVeterinariosComponent;
  let fixture: ComponentFixture<VistaVeterinariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaVeterinariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
