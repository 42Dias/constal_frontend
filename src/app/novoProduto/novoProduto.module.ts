import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  NovoProdutoRoutingModule,
  routedComponents,
} from 'src/app/novoproduto/novoproduto-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  imports: [
    SharedModule,
    LayoutModule,
    NovoProdutoRoutingModule,
    Ng2CarouselamosModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [],
})
export class NovoProdutoModule {}
