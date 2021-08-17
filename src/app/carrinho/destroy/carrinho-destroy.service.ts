import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { CarrinhoApi } from 'src/app/carrinho/carrinho.api';
import { CarrinhoListService } from 'src/app/carrinho/list/carrinho-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private carrinhoListService: CarrinhoListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await CarrinhoApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.carrinho.destroy.success'),
      );

      this.router.navigate(['/carrinho']);

      await this.carrinhoListService.doFetch(
        this.carrinhoListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await CarrinhoApi.destroyAll(ids);
      this.loading = false;

      this.carrinhoListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.carrinho.destroyAll.success'),
      );

      this.router.navigate(['/carrinho']);

      return this.carrinhoListService.doFetch(
        this.carrinhoListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
