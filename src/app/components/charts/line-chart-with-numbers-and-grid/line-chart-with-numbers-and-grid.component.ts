import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "app-line-chart-with-numbers-and-grid",
  templateUrl: "./line-chart-with-numbers-and-grid.component.html",
  styleUrls: ["./line-chart-with-numbers-and-grid.component.scss"],
})
export class LineChartWithNumbersAndGridComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  subtitle: string;

  public canvas: any;
  public chartColor;
  public ctx;
  public gradientFill;
  public gradientStroke;

  public gradientChartOptionsConfigurationWithNumbersAndGrid: any;
  public lineChartWithNumbersAndGridColors: Array<any>;
  public lineChartWithNumbersAndGridData: Array<any>;
  public lineChartWithNumbersAndGridOptions: any;
  public lineChartWithNumbersAndGridLabels: Array<any>;
  public lineChartWithNumbersAndGridType;

  constructor() {}

  ngOnInit(): void {
    this.chartColor = "#FFFFFF";

    this.gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              zeroLineColor: "transparent",
              drawBorder: false,
            },
            ticks: {
              stepSize: 500,
            },
          },
        ],
        xAxes: [
          {
            display: 0,
            ticks: {
              display: false,
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false,
            },
          },
        ],
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15,
        },
      },
    };

    this.canvas = document.getElementById("lineChartExampleWithNumbersAndGrid");
    this.ctx = this.canvas.getContext("2d");

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, "#18ce0f");
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    this.gradientFill.addColorStop(1, this.hexToRGB("#18ce0f", 0.4));

    this.lineChartWithNumbersAndGridData = [
      {
        label: "Temperatura",
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        borderWidth: 2,
        data: [23, 25, 28, 24, 22, 24, 19, 14],
      },
    ];
    this.lineChartWithNumbersAndGridColors = [
      {
        borderColor: "#18ce0f",
        pointBorderColor: "#FFF",
        pointBackgroundColor: "#18ce0f",
        backgroundColor: this.gradientFill,
      },
    ];
    this.lineChartWithNumbersAndGridLabels = [
      "12pm,",
      "3pm",
      "6pm",
      "9pm",
      "12am",
      "3am",
      "6am",
      "9am",
    ];
    this.lineChartWithNumbersAndGridOptions =
      this.gradientChartOptionsConfigurationWithNumbersAndGrid;

    this.lineChartWithNumbersAndGridType = "line";
  }

  public hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
