import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  CategoriaRoutingModule,
  routedComponents,
} from 'src/app/categoria/categoria-routing.module';
import { CategoriaListFilterComponent } from 'src/app/categoria/list/filter/categoria-list-filter.component';
import { CategoriaListTableComponent } from 'src/app/categoria/list/table/categoria-list-table.component';
import { CategoriaListToolbarComponent } from 'src/app/categoria/list/toolbar/categoria-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriaViewToolbarComponent } from 'src/app/categoria/view/categoria-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { CategoriaImporterService } from 'src/app/categoria/importer/categoria-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    CategoriaListFilterComponent,
    CategoriaListTableComponent,
    CategoriaListToolbarComponent,
    CategoriaViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    CategoriaRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: CategoriaImporterService,
    },
  ],
})
export class CategoriaModule {}
