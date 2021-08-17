import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { EmpresaListService } from 'src/app/empresa/list/empresa-list.service';
import { EmpresaService } from 'src/app/empresa/empresa.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { EmpresaDestroyService } from 'src/app/empresa/destroy/empresa-destroy.service';

@Component({
  selector: 'app-empresa-list-toolbar',
  templateUrl: './empresa-list-toolbar.component.html',
})
export class EmpresaListToolbarComponent {
  constructor(
    public service: EmpresaListService,
    private empresaService: EmpresaService,
    private destroyService: EmpresaDestroyService,
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
    return this.empresaService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.empresaService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.empresaService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.empresaService.hasPermissionToImport;
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
