import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "app-big-dashboard-chart",
  templateUrl: "./big-dashboard-chart.component.html",
  styleUrls: ["./big-dashboard-chart.component.scss"],
})
export class BigDashboardChartComponent implements OnInit {
  @Input()
  dataLabel: string;

  public canvas: any;
  public chartColor;
  public ctx;
  public gradientFill;
  public gradientStroke;
  public lineBigDashboardChartColors: Array<any>;
  public lineBigDashboardChartData: Array<any>;
  public lineBigDashboardChartLabels: Array<any>;
  public lineBigDashboardChartOptions: any;
  public lineBigDashboardChartType;
  constructor() {}

  ngOnInit(): void {
    this.chartColor = "#FFFFFF";
    this.canvas = document.getElementById("bigDashboardChart");
    this.ctx = this.canvas.getContext("2d");

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
    this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    this.gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

    let data = this.setDefaultData();

    //Chart Data
    this.lineBigDashboardChartData = [
      {
        // label: "Data",
        // label: this.dataLabel,
        label: data.label,

        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        fill: true,

        borderWidth: 2,
        data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95],
      },
    ];

    //Chart Colors
    this.lineBigDashboardChartColors = [
      {
        backgroundColor: this.gradientFill,
        borderColor: this.chartColor,
        pointBorderColor: this.chartColor,
        pointBackgroundColor: "#2c2c2c",
        pointHoverBackgroundColor: "#2c2c2c",
        pointHoverBorderColor: this.chartColor,
      },
    ];

    //Chart Labels
    this.lineBigDashboardChartLabels = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    //Chart Options
    this.lineBigDashboardChartOptions = {
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 0,
          bottom: 0,
        },
      },
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "#fff",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      legend: {
        position: "bottom",
        fillStyle: "#FFF",
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: "rgba(255,255,255,0.4)",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 5,
              padding: 10,
            },
            gridLines: {
              drawTicks: true,
              drawBorder: false,
              display: true,
              color: "rgba(255,255,255,0.1)",
              zeroLineColor: "transparent",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              zeroLineColor: "transparent",
              display: false,
            },
            ticks: {
              padding: 10,
              fontColor: "rgba(255,255,255,0.4)",
              fontStyle: "bold",
            },
          },
        ],
      },
    };

    //Chart Type
    this.lineBigDashboardChartType = "line";
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  setDefaultData() {
    let data = {
      label: "Temperatura",
      data: {
        0: {
          date: "2022/11/2",
          value: "5",
        },
        1: {
          date: "2022/11/3",
          value: "15",
        },
        2: {
          date: "2022/11/4",
          value: "25",
        },
        3: {
          date: "2022/11/5",
          value: "5",
        },
        4: {
          date: "2022/11/6",
          value: "25",
        },
        5: {
          date: "2022/11/7",
          value: "35",
        },
        6: {
          date: "2022/11/8",
          value: "45",
        },
        7: {
          date: "2022/11/9",
          value: "15",
        },
        8: {
          date: "2022/11/10",
          value: "5",
        },
        9: {
          date: "2022/11/11",
          value: "5",
        },
        10: {
          date: "2022/11/12",
          value: "5",
        },
        11: {
          date: "2022/11/13",
          value: "50",
        },
      },
    };
    return data;
  }
}
