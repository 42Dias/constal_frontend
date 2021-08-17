import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { PessoaFisicaViewService } from 'src/app/pessoa-fisica/view/pessoa-fisica-view.service';
import { PessoaFisicaService } from 'src/app/pessoa-fisica/pessoa-fisica.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { PessoaFisicaDestroyService } from 'src/app/pessoa-fisica/destroy/pessoa-fisica-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-pessoa-fisica-view-toolbar',
  templateUrl: './pessoa-fisica-view-toolbar.component.html',
})
export class PessoaFisicaViewToolbarComponent {
  constructor(
    public service: PessoaFisicaViewService,
    private pessoaFisicaService: PessoaFisicaService,
    private destroyService: PessoaFisicaDestroyService,
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
    return this.pessoaFisicaService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.pessoaFisicaService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.pessoaFisicaService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
