import { Injectable } from '@angular/core';
import { PessoaFisicaApi } from 'src/app/pessoa-fisica/pessoa-fisica.api';
import pessoaFisicaImporterFields from 'src/app/pessoa-fisica/importer/pessoa-fisica-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class PessoaFisicaImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      PessoaFisicaApi.import,
      pessoaFisicaImporterFields,
      i18n('entities.pessoaFisica.importer.fileName'),
      i18n('entities.pessoaFisica.importer.hint'),
    );
  }
}
