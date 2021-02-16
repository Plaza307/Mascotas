import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRestaurantesComponent } from './vista-restaurantes.component';

describe('VistaRestaurantesComponent', () => {
  let component: VistaRestaurantesComponent;
  let fixture: ComponentFixture<VistaRestaurantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaRestaurantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaRestaurantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
