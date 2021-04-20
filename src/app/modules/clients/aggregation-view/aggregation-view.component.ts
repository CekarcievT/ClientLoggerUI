import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-aggregation-view',
  templateUrl: './aggregation-view.component.html',
  styleUrls: ['./aggregation-view.component.scss']
})
export class AggregationViewComponent implements OnInit, OnChanges {
  @Input() public aggregationData:any;

  public gridState: State = {
    sort: [],
    skip: 0,
    take: 5
  };
  public gridView: GridDataResult;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(aggregation: SimpleChanges): void {
    if(!aggregation.aggregationData.firstChange) {
        this.loadItems();
    }
  }

  public loadItems() {
    this.gridView = process(this.aggregationData, this.gridState);
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.gridState = state;
    this.loadItems();
  }
}
