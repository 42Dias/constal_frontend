import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { PedidoViewService } from 'src/app/pedido/view/pedido-view.service';
import { PedidoService } from 'src/app/pedido/pedido.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { PedidoDestroyService } from 'src/app/pedido/destroy/pedido-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-pedido-view-toolbar',
  templateUrl: './pedido-view-toolbar.component.html',
})
export class PedidoViewToolbarComponent {
  constructor(
    public service: PedidoViewService,
    private pedidoService: PedidoService,
    private destroyService: PedidoDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  async doDestroy() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroy(this.record.id);
  }

  get destroyLoading() {
    return this.destroyService.loading;
  }

  get hasPermissionToDestroy() {
    return this.pedidoService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.pedidoService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.pedidoService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
