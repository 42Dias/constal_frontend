import { Injectable } from '@angular/core';
import { CarrinhoApi } from 'src/app/carrinho/carrinho.api';
import carrinhoImporterFields from 'src/app/carrinho/importer/carrinho-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      CarrinhoApi.import,
      carrinhoImporterFields,
      i18n('entities.carrinho.importer.fileName'),
      i18n('entities.carrinho.importer.hint'),
    );
  }
}
