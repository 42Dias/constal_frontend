import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { CarrinhoViewService } from 'src/app/carrinho/view/carrinho-view.service';
import { CarrinhoService } from 'src/app/carrinho/carrinho.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { CarrinhoDestroyService } from 'src/app/carrinho/destroy/carrinho-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-carrinho-view-toolbar',
  templateUrl: './carrinho-view-toolbar.component.html',
})
export class CarrinhoViewToolbarComponent {
  constructor(
    public service: CarrinhoViewService,
    private carrinhoService: CarrinhoService,
    private destroyService: CarrinhoDestroyService,
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
    return this.carrinhoService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.carrinhoService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.carrinhoService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
