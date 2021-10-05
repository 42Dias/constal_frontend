import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  GatewayRoutingModule,
  routedComponents,
} from 'src/app/gateway/gateway-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';


@NgModule({
  imports: [
    SharedModule,
    LayoutModule,
    GatewayRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [],
})
export class GatewayModule {}
