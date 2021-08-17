import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  CartaoRoutingModule,
  routedComponents,
} from 'src/app/cartao/cartao-routing.module';
import { CartaoListFilterComponent } from 'src/app/cartao/list/filter/cartao-list-filter.component';
import { CartaoListTableComponent } from 'src/app/cartao/list/table/cartao-list-table.component';
import { CartaoListToolbarComponent } from 'src/app/cartao/list/toolbar/cartao-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartaoViewToolbarComponent } from 'src/app/cartao/view/cartao-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { CartaoImporterService } from 'src/app/cartao/importer/cartao-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    CartaoListFilterComponent,
    CartaoListTableComponent,
    CartaoListToolbarComponent,
    CartaoViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    CartaoRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: CartaoImporterService,
    },
  ],
})
export class CartaoModule {}
