import { Component } from '@angular/core';
import { CategoriaListService } from 'src/app/categoria/list/categoria-list.service';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { CategoriaModel } from 'src/app/categoria/categoria-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { CategoriaDestroyService } from 'src/app/categoria/destroy/categoria-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-categoria-list-table',
  templateUrl: './categoria-list-table.component.html',
})
export class CategoriaListTableComponent {
  constructor(
    public service: CategoriaListService,
    public destroyService: CategoriaDestroyService,
    public categoriaService: CategoriaService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return CategoriaModel.presenter(row, fieldName);
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
    return this.categoriaService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.categoriaService.hasPermissionToDestroy;
  }

  get fields() {
    return CategoriaModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.nome.name,

      '_actions',
    ];
  }
}
