import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ProdutoApi } from 'src/app/produto/produto.api';
import { ProdutoListService } from 'src/app/produto/list/produto-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ProdutoDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private produtoListService: ProdutoListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await ProdutoApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.produto.destroy.success'),
      );

      this.router.navigate(['/produto']);

      await this.produtoListService.doFetch(
        this.produtoListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await ProdutoApi.destroyAll(ids);
      this.loading = false;

      this.produtoListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.produto.destroyAll.success'),
      );

      this.router.navigate(['/produto']);

      return this.produtoListService.doFetch(
        this.produtoListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
