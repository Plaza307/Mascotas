import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaConsejosComponent } from './vista-consejos.component';

describe('VistaConsejosComponent', () => {
  let component: VistaConsejosComponent;
  let fixture: ComponentFixture<VistaConsejosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaConsejosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaConsejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
