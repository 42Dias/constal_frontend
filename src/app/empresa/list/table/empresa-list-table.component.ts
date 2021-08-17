import { Component } from '@angular/core';
import { EmpresaListService } from 'src/app/empresa/list/empresa-list.service';
import { EmpresaService } from 'src/app/empresa/empresa.service';
import { EmpresaModel } from 'src/app/empresa/empresa-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { EmpresaDestroyService } from 'src/app/empresa/destroy/empresa-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-empresa-list-table',
  templateUrl: './empresa-list-table.component.html',
})
export class EmpresaListTableComponent {
  constructor(
    public service: EmpresaListService,
    public destroyService: EmpresaDestroyService,
    public empresaService: EmpresaService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return EmpresaModel.presenter(row, fieldName);
  }

  i18n(key) {
    return i18n(key);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.empresaService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.empresaService.hasPermissionToDestroy;
  }

  get fields() {
    return EmpresaModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.marca.name,
      this.fields.razaoSocial.name,
      this.fields.cnpj.name,
      this.fields.telefone.name,
      this.fields.ramal.name,
      this.fields.email.name,
      this.fields.website.name,
      this.fields.cep.name,
      this.fields.logradouro.name,
      this.fields.numero.name,
      this.fields.complemento.name,
      this.fields.pontoReferencia.name,
      this.fields.cidade.name,
      this.fields.estado.name,
      this.fields.bairro.name,
      this.fields.foto.name,
      this.fields.user.name,

      '_actions',
    ];
  }
}
