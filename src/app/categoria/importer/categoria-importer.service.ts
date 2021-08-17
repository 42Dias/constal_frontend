import { Injectable } from '@angular/core';
import { CategoriaApi } from 'src/app/categoria/categoria.api';
import categoriaImporterFields from 'src/app/categoria/importer/categoria-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriaImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      CategoriaApi.import,
      categoriaImporterFields,
      i18n('entities.categoria.importer.fileName'),
      i18n('entities.categoria.importer.hint'),
    );
  }
}
