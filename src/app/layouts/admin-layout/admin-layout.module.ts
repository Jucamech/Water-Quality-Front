import { TableResponsiveComponent } from './../../components/charts/table-responsive/table-responsive.component';
import { CardChartComponent } from './../../components/charts/card-chart/card-chart.component';
import { LineChartWithNumbersAndGridComponent } from './../../components/charts/line-chart-with-numbers-and-grid/line-chart-with-numbers-and-grid.component';
import { LineChartComponent } from './../../components/charts/line-chart/line-chart.component';
import { BarChartSimpleGradientsNumbersComponent } from './../../components/charts/bar-chart-simple-gradients-numbers/bar-chart-simple-gradients-numbers.component';
import { BigDashboardChartComponent } from './../../components/charts/big-dashboard-chart/big-dashboard-chart.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    BigDashboardChartComponent,
    BarChartSimpleGradientsNumbersComponent,
    LineChartComponent,
    LineChartWithNumbersAndGridComponent,
    CardChartComponent,
    TableResponsiveComponent
  ]
})

export class AdminLayoutModule {}
