import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  ListaProdutosRoutingModule,
  routedComponents,
} from 'src/app/listaProdutos/listaProdutos-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  imports: [
    SharedModule,
    LayoutModule,
    ListaProdutosRoutingModule,
    Ng2CarouselamosModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [],
})
export class ListaProdutosModule {}
