import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PedidoApi } from 'src/app/pedido/pedido.api';
import { PedidoListService } from 'src/app/pedido/list/pedido-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class PedidoDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private pedidoListService: PedidoListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await PedidoApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.pedido.destroy.success'),
      );

      this.router.navigate(['/pedido']);

      await this.pedidoListService.doFetch(
        this.pedidoListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await PedidoApi.destroyAll(ids);
      this.loading = false;

      this.pedidoListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.pedido.destroyAll.success'),
      );

      this.router.navigate(['/pedido']);

      return this.pedidoListService.doFetch(
        this.pedidoListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
