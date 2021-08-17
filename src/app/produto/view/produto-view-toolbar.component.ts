import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ProdutoViewService } from 'src/app/produto/view/produto-view.service';
import { ProdutoService } from 'src/app/produto/produto.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ProdutoDestroyService } from 'src/app/produto/destroy/produto-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-produto-view-toolbar',
  templateUrl: './produto-view-toolbar.component.html',
})
export class ProdutoViewToolbarComponent {
  constructor(
    public service: ProdutoViewService,
    private produtoService: ProdutoService,
    private destroyService: ProdutoDestroyService,
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
    return this.produtoService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.produtoService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.produtoService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
