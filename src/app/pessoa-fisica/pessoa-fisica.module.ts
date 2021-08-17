import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  PessoaFisicaRoutingModule,
  routedComponents,
} from 'src/app/pessoa-fisica/pessoa-fisica-routing.module';
import { PessoaFisicaListFilterComponent } from 'src/app/pessoa-fisica/list/filter/pessoa-fisica-list-filter.component';
import { PessoaFisicaListTableComponent } from 'src/app/pessoa-fisica/list/table/pessoa-fisica-list-table.component';
import { PessoaFisicaListToolbarComponent } from 'src/app/pessoa-fisica/list/toolbar/pessoa-fisica-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PessoaFisicaViewToolbarComponent } from 'src/app/pessoa-fisica/view/pessoa-fisica-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { PessoaFisicaImporterService } from 'src/app/pessoa-fisica/importer/pessoa-fisica-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    PessoaFisicaListFilterComponent,
    PessoaFisicaListTableComponent,
    PessoaFisicaListToolbarComponent,
    PessoaFisicaViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    PessoaFisicaRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: PessoaFisicaImporterService,
    },
  ],
})
export class PessoaFisicaModule {}
