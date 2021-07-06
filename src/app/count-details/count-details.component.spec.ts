import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDetailsComponent } from './count-details.component';

describe('CountDetailsComponent', () => {
  let component: CountDetailsComponent;
  let fixture: ComponentFixture<CountDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
