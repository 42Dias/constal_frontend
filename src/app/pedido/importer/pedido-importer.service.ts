import { Injectable } from '@angular/core';
import { PedidoApi } from 'src/app/pedido/pedido.api';
import pedidoImporterFields from 'src/app/pedido/importer/pedido-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class PedidoImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      PedidoApi.import,
      pedidoImporterFields,
      i18n('entities.pedido.importer.fileName'),
      i18n('entities.pedido.importer.hint'),
    );
  }
}
