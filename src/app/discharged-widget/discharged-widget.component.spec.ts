import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargedWidgetComponent } from './discharged-widget.component';

describe('DischargedWidgetComponent', () => {
  let component: DischargedWidgetComponent;
  let fixture: ComponentFixture<DischargedWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DischargedWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargedWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
