import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartSimpleGradientsNumbersComponent } from './bar-chart-simple-gradients-numbers.component';

describe('BarChartSimpleGradientsNumbersComponent', () => {
  let component: BarChartSimpleGradientsNumbersComponent;
  let fixture: ComponentFixture<BarChartSimpleGradientsNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartSimpleGradientsNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartSimpleGradientsNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
