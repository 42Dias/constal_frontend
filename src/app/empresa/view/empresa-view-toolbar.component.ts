import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { EmpresaViewService } from 'src/app/empresa/view/empresa-view.service';
import { EmpresaService } from 'src/app/empresa/empresa.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { EmpresaDestroyService } from 'src/app/empresa/destroy/empresa-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-empresa-view-toolbar',
  templateUrl: './empresa-view-toolbar.component.html',
})
export class EmpresaViewToolbarComponent {
  constructor(
    public service: EmpresaViewService,
    private empresaService: EmpresaService,
    private destroyService: EmpresaDestroyService,
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
    return this.empresaService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.empresaService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.empresaService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
