import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { CartaoViewService } from 'src/app/cartao/view/cartao-view.service';
import { CartaoService } from 'src/app/cartao/cartao.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { CartaoDestroyService } from 'src/app/cartao/destroy/cartao-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-cartao-view-toolbar',
  templateUrl: './cartao-view-toolbar.component.html',
})
export class CartaoViewToolbarComponent {
  constructor(
    public service: CartaoViewService,
    private cartaoService: CartaoService,
    private destroyService: CartaoDestroyService,
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
    return this.cartaoService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.cartaoService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.cartaoService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
