import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  ProdutoEmpresaRoutingModule,
  routedComponents,
} from 'src/app/produtoEmpresa/produtoEmpresa-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  imports: [
    SharedModule,
    LayoutModule,
    ProdutoEmpresaRoutingModule,
    Ng2CarouselamosModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [],
})
export class ProdutoEmpresaModule {}
