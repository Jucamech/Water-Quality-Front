import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  //Electrical Conductivity
  public electricalConductivityName = "Conductividad Eléctrica";
  public electricalConductivityMeasurement = "S/CM";
  public electricalConductivityChartType = "lineChart";
  //pH
  public pHName = "pH";
  public pHMeasurement = "Acidez";
  public pHChartType = "lineChartNumbersGrid";
  //Dissolved Oxigen
  public dissolvedOxigenName = "Oxígeno Disuelto";
  public dissolvedOxigenMeasurement = "Mg/L";
  public dissolvedOxigenChartType = "barChart";
  //
  //
  //Turbity
  public turbityName = "Turbidez";
  public turbityMeasurement = "NTU";
  public turbityChartType = "barChart";
  //Temperature
  public temperatureName = "Temperatura";
  public temperatureMeasurement = "C°";
  public temperatureChartType = "tableResponsive";

  constructor() {}

  ngOnInit() {}
}
