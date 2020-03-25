import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanWeekendComponent } from './plan-weekend.component';

describe('PlanWeekendComponent', () => {
  let component: PlanWeekendComponent;
  let fixture: ComponentFixture<PlanWeekendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanWeekendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanWeekendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
