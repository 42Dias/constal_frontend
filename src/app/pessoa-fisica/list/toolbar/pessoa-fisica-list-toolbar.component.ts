import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { PessoaFisicaListService } from 'src/app/pessoa-fisica/list/pessoa-fisica-list.service';
import { PessoaFisicaService } from 'src/app/pessoa-fisica/pessoa-fisica.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { PessoaFisicaDestroyService } from 'src/app/pessoa-fisica/destroy/pessoa-fisica-destroy.service';

@Component({
  selector: 'app-pessoa-fisica-list-toolbar',
  templateUrl: './pessoa-fisica-list-toolbar.component.html',
})
export class PessoaFisicaListToolbarComponent {
  constructor(
    public service: PessoaFisicaListService,
    private pessoaFisicaService: PessoaFisicaService,
    private destroyService: PessoaFisicaDestroyService,
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
    return this.pessoaFisicaService.hasPermissionToCreate;
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
