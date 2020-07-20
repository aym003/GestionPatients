import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulteMedecinComponent } from './consulte-medecin.component';

describe('ConsulteMedecinComponent', () => {
  let component: ConsulteMedecinComponent;
  let fixture: ComponentFixture<ConsulteMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulteMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulteMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
