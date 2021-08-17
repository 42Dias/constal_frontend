import { Component } from '@angular/core';
import { ProdutoListService } from 'src/app/produto/list/produto-list.service';
import { ProdutoService } from 'src/app/produto/produto.service';
import { ProdutoModel } from 'src/app/produto/produto-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ProdutoDestroyService } from 'src/app/produto/destroy/produto-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-produto-list-table',
  templateUrl: './produto-list-table.component.html',
})
export class ProdutoListTableComponent {
  constructor(
    public service: ProdutoListService,
    public destroyService: ProdutoDestroyService,
    public produtoService: ProdutoService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return ProdutoModel.presenter(row, fieldName);
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
    return this.produtoService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.produtoService.hasPermissionToDestroy;
  }

  get fields() {
    return ProdutoModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.nome.name,
      this.fields.descricao.name,
      this.fields.marca.name,
      this.fields.modelo.name,
      this.fields.caracteristicas.name,
      this.fields.codigo.name,
      this.fields.preco.name,
      this.fields.somatoriaAvaliacoes.name,
      this.fields.quantidadeAvaliacoes.name,
      this.fields.volumeVendas.name,
      this.fields.fotos.name,
      this.fields.empresa.name,
      this.fields.categoria.name,

      '_actions',
    ];
  }
}
