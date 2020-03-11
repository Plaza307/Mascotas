import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaHotelesComponent } from './vista-hoteles.component';

describe('VistaHotelesComponent', () => {
  let component: VistaHotelesComponent;
  let fixture: ComponentFixture<VistaHotelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaHotelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
