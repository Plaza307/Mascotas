import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSearchComponent } from './vista-search.component';

describe('VistaSearchComponent', () => {
  let component: VistaSearchComponent;
  let fixture: ComponentFixture<VistaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
