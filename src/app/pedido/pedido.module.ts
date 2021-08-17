import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  PedidoRoutingModule,
  routedComponents,
} from 'src/app/pedido/pedido-routing.module';
import { PedidoListFilterComponent } from 'src/app/pedido/list/filter/pedido-list-filter.component';
import { PedidoListTableComponent } from 'src/app/pedido/list/table/pedido-list-table.component';
import { PedidoListToolbarComponent } from 'src/app/pedido/list/toolbar/pedido-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PedidoViewToolbarComponent } from 'src/app/pedido/view/pedido-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { PedidoImporterService } from 'src/app/pedido/importer/pedido-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    PedidoListFilterComponent,
    PedidoListTableComponent,
    PedidoListToolbarComponent,
    PedidoViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    PedidoRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: PedidoImporterService,
    },
  ],
})
export class PedidoModule {}
