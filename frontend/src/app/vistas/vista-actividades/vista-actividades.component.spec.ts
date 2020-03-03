import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaActividadesComponent } from './vista-actividades.component';

describe('VistaActividadesComponent', () => {
  let component: VistaActividadesComponent;
  let fixture: ComponentFixture<VistaActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
