import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  DashboardClienteRoutingModule,
  routedComponents,
} from '../dashboard-cliente/dashboard-cliente-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { DashboardClienteComponent } from './dashboard-cliente.component';


@NgModule({
  imports: [
    SharedModule,
    LayoutModule,
    DashboardClienteRoutingModule,
  ],
  declarations: [
      DashboardClienteComponent,
    ...routedComponents,
  ],
  providers: [],
})
export class DashboardClienteModule {}
