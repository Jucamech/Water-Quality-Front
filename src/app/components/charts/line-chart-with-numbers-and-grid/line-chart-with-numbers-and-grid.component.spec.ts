import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartWithNumbersAndGridComponent } from './line-chart-with-numbers-and-grid.component';

describe('LineChartWithNumbersAndGridComponent', () => {
  let component: LineChartWithNumbersAndGridComponent;
  let fixture: ComponentFixture<LineChartWithNumbersAndGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartWithNumbersAndGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartWithNumbersAndGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
