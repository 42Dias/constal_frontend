import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  DetalhesRoutingModule,
  routedComponents,
} from 'src/app/detalhes/detalhes-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  imports: [
    SharedModule,
    LayoutModule,
    DetalhesRoutingModule,
    Ng2CarouselamosModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [],
})
export class DetalhesModule {}
