import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { CategoriaApi } from 'src/app/categoria/categoria.api';
import { CategoriaListService } from 'src/app/categoria/list/categoria-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class CategoriaDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private categoriaListService: CategoriaListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await CategoriaApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.categoria.destroy.success'),
      );

      this.router.navigate(['/categoria']);

      await this.categoriaListService.doFetch(
        this.categoriaListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await CategoriaApi.destroyAll(ids);
      this.loading = false;

      this.categoriaListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.categoria.destroyAll.success'),
      );

      this.router.navigate(['/categoria']);

      return this.categoriaListService.doFetch(
        this.categoriaListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
