import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { PedidoListService } from 'src/app/pedido/list/pedido-list.service';
import { PedidoService } from 'src/app/pedido/pedido.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { PedidoDestroyService } from 'src/app/pedido/destroy/pedido-destroy.service';

@Component({
  selector: 'app-pedido-list-toolbar',
  templateUrl: './pedido-list-toolbar.component.html',
})
export class PedidoListToolbarComponent {
  constructor(
    public service: PedidoListService,
    private pedidoService: PedidoService,
    private destroyService: PedidoDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  get destroyButtonDisabled() {
    return (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading ||
      this.destroyService.loading
    );
  }

  get destroyButtonTooltip() {
    if (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading
    ) {
      return i18n('common.mustSelectARow');
    }
  }

  async doDestroyAllSelected() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroyAll(
      this.service.selectedKeys.selected,
    );
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get hasPermissionToCreate() {
    return this.pedidoService.hasPermissionToCreate;
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

  doExport() {
    return this.service.doExport();
  }

  get exportButtonDisabled() {
    return (
      !this.service.hasRows ||
      this.service.loading ||
      this.service.exportLoading
    );
  }

  get exportButtonTooltip() {
    if (!this.service.hasRows || this.service.loading) {
      return i18n('common.noDataToExport');
    }
  }
}
