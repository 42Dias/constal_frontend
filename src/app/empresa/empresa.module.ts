import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  EmpresaRoutingModule,
  routedComponents,
} from 'src/app/empresa/empresa-routing.module';
import { EmpresaListFilterComponent } from 'src/app/empresa/list/filter/empresa-list-filter.component';
import { EmpresaListTableComponent } from 'src/app/empresa/list/table/empresa-list-table.component';
import { EmpresaListToolbarComponent } from 'src/app/empresa/list/toolbar/empresa-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmpresaViewToolbarComponent } from 'src/app/empresa/view/empresa-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { EmpresaImporterService } from 'src/app/empresa/importer/empresa-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    EmpresaListFilterComponent,
    EmpresaListTableComponent,
    EmpresaListToolbarComponent,
    EmpresaViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    EmpresaRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: EmpresaImporterService,
    },
  ],
})
export class EmpresaModule {}
