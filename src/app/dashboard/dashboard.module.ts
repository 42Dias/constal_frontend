import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  DashboardRoutingModule,
  routedComponents,
} from 'src/app/dashboard/dashboard-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { DashboardChartComponent } from 'src/app/dashboard/charts/dashboard-chart.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  imports: [
    SharedModule,
    LayoutModule,
    DashboardRoutingModule,
    Ng2CarouselamosModule,
  ],
  declarations: [
    DashboardChartComponent,
    ...routedComponents,
  ],
  providers: [],
})
export class DashboardModule {}
