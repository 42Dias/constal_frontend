import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  CarrinhoRoutingModule,
  routedComponents,
} from 'src/app/carrinho/carrinho-routing.module';
import { CarrinhoListFilterComponent } from 'src/app/carrinho/list/filter/carrinho-list-filter.component';
import { CarrinhoListTableComponent } from 'src/app/carrinho/list/table/carrinho-list-table.component';
import { CarrinhoListToolbarComponent } from 'src/app/carrinho/list/toolbar/carrinho-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarrinhoViewToolbarComponent } from 'src/app/carrinho/view/carrinho-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { CarrinhoImporterService } from 'src/app/carrinho/importer/carrinho-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  declarations: [
    ...routedComponents,
    CarrinhoListFilterComponent,
    CarrinhoListTableComponent,
    CarrinhoListToolbarComponent,
    CarrinhoViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    CarrinhoRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
    Ng2CarouselamosModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: CarrinhoImporterService,
    },
  ],
})
export class CarrinhoModule {}
