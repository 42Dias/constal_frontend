import { Component } from '@angular/core';
import { CarrinhoListService } from 'src/app/carrinho/list/carrinho-list.service';
import { CarrinhoService } from 'src/app/carrinho/carrinho.service';
import { CarrinhoModel } from 'src/app/carrinho/carrinho-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { CarrinhoDestroyService } from 'src/app/carrinho/destroy/carrinho-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-carrinho-list-table',
  templateUrl: './carrinho-list-table.component.html',
})
export class CarrinhoListTableComponent {
  constructor(
    public service: CarrinhoListService,
    public destroyService: CarrinhoDestroyService,
    public carrinhoService: CarrinhoService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return CarrinhoModel.presenter(row, fieldName);
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
    return this.carrinhoService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.carrinhoService.hasPermissionToDestroy;
  }

  get fields() {
    return CarrinhoModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.userId.name,
      this.fields.produto.name,

      '_actions',
    ];
  }
}
