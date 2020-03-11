import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCampingsComponent } from './vista-campings.component';

describe('VistaCampingsComponent', () => {
  let component: VistaCampingsComponent;
  let fixture: ComponentFixture<VistaCampingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCampingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCampingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
