import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRoleUserComponent } from './vista-role-user.component';

describe('VistaRoleUserComponent', () => {
  let component: VistaRoleUserComponent;
  let fixture: ComponentFixture<VistaRoleUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaRoleUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaRoleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
