import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { CartaoApi } from 'src/app/cartao/cartao.api';
import { CartaoListService } from 'src/app/cartao/list/cartao-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class CartaoDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private cartaoListService: CartaoListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await CartaoApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.cartao.destroy.success'),
      );

      this.router.navigate(['/cartao']);

      await this.cartaoListService.doFetch(
        this.cartaoListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await CartaoApi.destroyAll(ids);
      this.loading = false;

      this.cartaoListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.cartao.destroyAll.success'),
      );

      this.router.navigate(['/cartao']);

      return this.cartaoListService.doFetch(
        this.cartaoListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
