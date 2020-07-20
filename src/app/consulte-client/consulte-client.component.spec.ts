import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulteClientComponent } from './consulte-client.component';

describe('ConsulteClientComponent', () => {
  let component: ConsulteClientComponent;
  let fixture: ComponentFixture<ConsulteClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulteClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulteClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
