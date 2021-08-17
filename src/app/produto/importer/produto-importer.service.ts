import { Injectable } from '@angular/core';
import { ProdutoApi } from 'src/app/produto/produto.api';
import produtoImporterFields from 'src/app/produto/importer/produto-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class ProdutoImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      ProdutoApi.import,
      produtoImporterFields,
      i18n('entities.produto.importer.fileName'),
      i18n('entities.produto.importer.hint'),
    );
  }
}
