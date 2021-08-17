import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ProdutoRoutingModule,
  routedComponents,
} from 'src/app/produto/produto-routing.module';
import { ProdutoListFilterComponent } from 'src/app/produto/list/filter/produto-list-filter.component';
import { ProdutoListTableComponent } from 'src/app/produto/list/table/produto-list-table.component';
import { ProdutoListToolbarComponent } from 'src/app/produto/list/toolbar/produto-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProdutoViewToolbarComponent } from 'src/app/produto/view/produto-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { ProdutoImporterService } from 'src/app/produto/importer/produto-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    ProdutoListFilterComponent,
    ProdutoListTableComponent,
    ProdutoListToolbarComponent,
    ProdutoViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    ProdutoRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: ProdutoImporterService,
    },
  ],
})
export class ProdutoModule {}
