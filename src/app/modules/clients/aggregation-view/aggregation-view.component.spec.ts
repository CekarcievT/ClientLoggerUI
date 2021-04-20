import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregationViewComponent } from './aggregation-view.component';

describe('AggregationViewComponent', () => {
  let component: AggregationViewComponent;
  let fixture: ComponentFixture<AggregationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
