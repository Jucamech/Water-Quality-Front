import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigDashboardChartComponent } from './big-dashboard-chart.component';

describe('BigDashboardChartComponent', () => {
  let component: BigDashboardChartComponent;
  let fixture: ComponentFixture<BigDashboardChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigDashboardChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigDashboardChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
