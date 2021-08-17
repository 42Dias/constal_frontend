import { Component } from '@angular/core';
import { PedidoListService } from 'src/app/pedido/list/pedido-list.service';
import { PedidoService } from 'src/app/pedido/pedido.service';
import { PedidoModel } from 'src/app/pedido/pedido-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { PedidoDestroyService } from 'src/app/pedido/destroy/pedido-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-pedido-list-table',
  templateUrl: './pedido-list-table.component.html',
})
export class PedidoListTableComponent {
  constructor(
    public service: PedidoListService,
    public destroyService: PedidoDestroyService,
    public pedidoService: PedidoService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return PedidoModel.presenter(row, fieldName);
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
    return this.pedidoService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.pedidoService.hasPermissionToDestroy;
  }

  get fields() {
    return PedidoModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.codigo.name,
      this.fields.quantidadeProdutos.name,
      this.fields.formaPagamento.name,
      this.fields.valorTotal.name,
      this.fields.dataPedido.name,
      this.fields.dataProcessamento.name,
      this.fields.dataEnvio.name,
      this.fields.dataEntrega.name,
      this.fields.dataFaturamento.name,
      this.fields.status.name,
      this.fields.valorFrete.name,
      this.fields.compradorUser.name,
      this.fields.fornecedorEmpresa.name,
      this.fields.produto.name,

      '_actions',
    ];
  }
}
