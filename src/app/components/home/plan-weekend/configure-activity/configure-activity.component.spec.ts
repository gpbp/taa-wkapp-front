import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureActivityComponent } from './configure-activity.component';

describe('ConfigureActivityComponent', () => {
  let component: ConfigureActivityComponent;
  let fixture: ComponentFixture<ConfigureActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
