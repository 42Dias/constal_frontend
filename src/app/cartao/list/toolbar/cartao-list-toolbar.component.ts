import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { CartaoListService } from 'src/app/cartao/list/cartao-list.service';
import { CartaoService } from 'src/app/cartao/cartao.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { CartaoDestroyService } from 'src/app/cartao/destroy/cartao-destroy.service';

@Component({
  selector: 'app-cartao-list-toolbar',
  templateUrl: './cartao-list-toolbar.component.html',
})
export class CartaoListToolbarComponent {
  constructor(
    public service: CartaoListService,
    private cartaoService: CartaoService,
    private destroyService: CartaoDestroyService,
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
    return this.cartaoService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.cartaoService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.cartaoService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.cartaoService.hasPermissionToImport;
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
