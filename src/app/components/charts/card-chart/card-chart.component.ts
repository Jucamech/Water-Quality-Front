import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "app-card-chart",
  templateUrl: "./card-chart.component.html",
  styleUrls: ["./card-chart.component.scss"],
})
export class CardChartComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  subtitle: string;

  @Input()
  chartType: string;
  constructor() {}

  ngOnInit(): void {
  }
}
