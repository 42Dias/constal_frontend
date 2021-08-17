import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { CarrinhoListService } from 'src/app/carrinho/list/carrinho-list.service';
import { CarrinhoService } from 'src/app/carrinho/carrinho.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { CarrinhoDestroyService } from 'src/app/carrinho/destroy/carrinho-destroy.service';

@Component({
  selector: 'app-carrinho-list-toolbar',
  templateUrl: './carrinho-list-toolbar.component.html',
})
export class CarrinhoListToolbarComponent {
  constructor(
    public service: CarrinhoListService,
    private carrinhoService: CarrinhoService,
    private destroyService: CarrinhoDestroyService,
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
    return this.carrinhoService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.carrinhoService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.carrinhoService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.carrinhoService.hasPermissionToImport;
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
