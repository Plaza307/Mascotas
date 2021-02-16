import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTiendasComponent } from './vista-tiendas.component';

describe('VistaTiendasComponent', () => {
  let component: VistaTiendasComponent;
  let fixture: ComponentFixture<VistaTiendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaTiendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
