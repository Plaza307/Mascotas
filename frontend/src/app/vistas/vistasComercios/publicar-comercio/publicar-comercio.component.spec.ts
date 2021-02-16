import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarComercioComponent } from './publicar-comercio.component';

describe('PublicarComercioComponent', () => {
  let component: PublicarComercioComponent;
  let fixture: ComponentFixture<PublicarComercioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarComercioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
