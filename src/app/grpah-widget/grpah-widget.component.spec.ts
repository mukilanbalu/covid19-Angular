import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpahWidgetComponent } from './grpah-widget.component';

describe('GrpahWidgetComponent', () => {
  let component: GrpahWidgetComponent;
  let fixture: ComponentFixture<GrpahWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrpahWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpahWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
