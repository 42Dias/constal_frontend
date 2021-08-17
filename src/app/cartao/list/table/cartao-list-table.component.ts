import { Component } from '@angular/core';
import { CartaoListService } from 'src/app/cartao/list/cartao-list.service';
import { CartaoService } from 'src/app/cartao/cartao.service';
import { CartaoModel } from 'src/app/cartao/cartao-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { CartaoDestroyService } from 'src/app/cartao/destroy/cartao-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-cartao-list-table',
  templateUrl: './cartao-list-table.component.html',
})
export class CartaoListTableComponent {
  constructor(
    public service: CartaoListService,
    public destroyService: CartaoDestroyService,
    public cartaoService: CartaoService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return CartaoModel.presenter(row, fieldName);
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
    return this.cartaoService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.cartaoService.hasPermissionToDestroy;
  }

  get fields() {
    return CartaoModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.tipo.name,
      this.fields.nomeTitular.name,
      this.fields.apelido.name,
      this.fields.numero.name,
      this.fields.cvv.name,
      this.fields.validade.name,
      this.fields.bandeira.name,
      this.fields.user.name,

      '_actions',
    ];
  }
}
