import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendasComponent } from './vendas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { VendasRoutingModule } from 'src/app/vendas/vendas-routing.module'




@NgModule({
  declarations: [VendasComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    VendasRoutingModule,
  ]
})
export class VendasModule { }
