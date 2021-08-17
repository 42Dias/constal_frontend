import { Injectable } from '@angular/core';
import { CartaoApi } from 'src/app/cartao/cartao.api';
import cartaoImporterFields from 'src/app/cartao/importer/cartao-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class CartaoImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      CartaoApi.import,
      cartaoImporterFields,
      i18n('entities.cartao.importer.fileName'),
      i18n('entities.cartao.importer.hint'),
    );
  }
}
