import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.scss"],
})
export class LineChartComponent implements OnInit {
  @Input()
  chartData: any;

  @Input()
  chartLabels: any;

  @Input()
  chartInitialDate: any;

  @Input()
  chartEndDate: any;

  public canvas: any;
  public chartColor;
  public ctx;
  public gradientFill;
  public gradientChartOptionsConfiguration: any;
  public gradientStroke;
  public lineChartColors: Array<any>;
  public lineChartData: Array<any>;
  public lineChartLabels: Array<any>;
  public lineChartOptions: any;
  public lineChartType;
  constructor() {}

  ngOnInit(): void {
    this.chartColor = "#FFFFFF";

    this.gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
        fillStyle: "#FFF",
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
      responsive: 1,
      scales: {
        yAxes: [
          {
            // display: 0,
            ticks: {
              // display: false,
              fontColor: "rgba(0,0,0,0.4)",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 5,
              padding: 10,
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: true,
              display: false,
              drawBorder: false,
            },
          },
        ],
        xAxes: [
          {
            // display: 0,
            ticks: {
              // display: false,
              padding: 10,
              fontColor: "rgba(0,0,0,0.4)",
              fontStyle: "bold",
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

    this.canvas = document.getElementById("lineChartExample");
    this.ctx = this.canvas.getContext("2d");

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, "#80b6f4");
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    this.lineChartData = [
      {
        label: "Active Users",
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        borderWidth: 2,
        data: [550, 530, 453, 380, 434, 568, 610, 700, 630],
      },
    ];
    this.lineChartColors = [
      {
        borderColor: "#f96332",
        pointBorderColor: "#FFF",
        pointBackgroundColor: "#f96332",
        backgroundColor: this.gradientFill,
      },
    ];
    this.lineChartLabels = [
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    this.lineChartOptions = this.gradientChartOptionsConfiguration;

    this.lineChartType = "line";
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
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
}
