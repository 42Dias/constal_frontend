import { Component } from '@angular/core';
import { PessoaFisicaListService } from 'src/app/pessoa-fisica/list/pessoa-fisica-list.service';
import { PessoaFisicaService } from 'src/app/pessoa-fisica/pessoa-fisica.service';
import { PessoaFisicaModel } from 'src/app/pessoa-fisica/pessoa-fisica-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { PessoaFisicaDestroyService } from 'src/app/pessoa-fisica/destroy/pessoa-fisica-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-pessoa-fisica-list-table',
  templateUrl: './pessoa-fisica-list-table.component.html',
})
export class PessoaFisicaListTableComponent {
  constructor(
    public service: PessoaFisicaListService,
    public destroyService: PessoaFisicaDestroyService,
    public pessoaFisicaService: PessoaFisicaService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return PessoaFisicaModel.presenter(row, fieldName);
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
    return this.pessoaFisicaService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.pessoaFisicaService.hasPermissionToDestroy;
  }

  get fields() {
    return PessoaFisicaModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.cpf.name,
      this.fields.nome.name,
      this.fields.email.name,
      this.fields.telefone.name,
      this.fields.celular.name,
      this.fields.cep.name,
      this.fields.logradouro.name,
      this.fields.numero.name,
      this.fields.complemento.name,
      this.fields.pontoReferencia.name,
      this.fields.cidade.name,
      this.fields.estado.name,
      this.fields.bairro.name,
      this.fields.pix.name,
      this.fields.foto.name,
      this.fields.user.name,

      '_actions',
    ];
  }
}
