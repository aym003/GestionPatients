import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheMedComponent } from './recherche-med.component';

describe('RechercheMedComponent', () => {
  let component: RechercheMedComponent;
  let fixture: ComponentFixture<RechercheMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
