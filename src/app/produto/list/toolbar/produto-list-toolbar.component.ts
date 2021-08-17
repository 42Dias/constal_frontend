import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ProdutoListService } from 'src/app/produto/list/produto-list.service';
import { ProdutoService } from 'src/app/produto/produto.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ProdutoDestroyService } from 'src/app/produto/destroy/produto-destroy.service';

@Component({
  selector: 'app-produto-list-toolbar',
  templateUrl: './produto-list-toolbar.component.html',
})
export class ProdutoListToolbarComponent {
  constructor(
    public service: ProdutoListService,
    private produtoService: ProdutoService,
    private destroyService: ProdutoDestroyService,
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
    return this.produtoService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.produtoService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.produtoService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.produtoService.hasPermissionToImport;
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
