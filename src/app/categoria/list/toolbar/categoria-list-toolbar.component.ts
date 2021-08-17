import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { CategoriaListService } from 'src/app/categoria/list/categoria-list.service';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { CategoriaDestroyService } from 'src/app/categoria/destroy/categoria-destroy.service';

@Component({
  selector: 'app-categoria-list-toolbar',
  templateUrl: './categoria-list-toolbar.component.html',
})
export class CategoriaListToolbarComponent {
  constructor(
    public service: CategoriaListService,
    private categoriaService: CategoriaService,
    private destroyService: CategoriaDestroyService,
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
    return this.categoriaService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.categoriaService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.categoriaService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.categoriaService.hasPermissionToImport;
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
