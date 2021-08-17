import { Injectable } from '@angular/core';
import { EmpresaApi } from 'src/app/empresa/empresa.api';
import empresaImporterFields from 'src/app/empresa/importer/empresa-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class EmpresaImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      EmpresaApi.import,
      empresaImporterFields,
      i18n('entities.empresa.importer.fileName'),
      i18n('entities.empresa.importer.hint'),
    );
  }
}
