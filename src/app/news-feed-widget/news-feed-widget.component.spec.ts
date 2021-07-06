import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedWidgetComponent } from './news-feed-widget.component';

describe('NewsFeedWidgetComponent', () => {
  let component: NewsFeedWidgetComponent;
  let fixture: ComponentFixture<NewsFeedWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
