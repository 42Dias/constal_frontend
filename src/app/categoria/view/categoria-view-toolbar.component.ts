import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { CategoriaViewService } from 'src/app/categoria/view/categoria-view.service';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { CategoriaDestroyService } from 'src/app/categoria/destroy/categoria-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-categoria-view-toolbar',
  templateUrl: './categoria-view-toolbar.component.html',
})
export class CategoriaViewToolbarComponent {
  constructor(
    public service: CategoriaViewService,
    private categoriaService: CategoriaService,
    private destroyService: CategoriaDestroyService,
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
    return this.categoriaService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.categoriaService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.categoriaService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
