import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { EmpresaApi } from 'src/app/empresa/empresa.api';
import { EmpresaListService } from 'src/app/empresa/list/empresa-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class EmpresaDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private empresaListService: EmpresaListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await EmpresaApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.empresa.destroy.success'),
      );

      this.router.navigate(['/empresa']);

      await this.empresaListService.doFetch(
        this.empresaListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await EmpresaApi.destroyAll(ids);
      this.loading = false;

      this.empresaListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.empresa.destroyAll.success'),
      );

      this.router.navigate(['/empresa']);

      return this.empresaListService.doFetch(
        this.empresaListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
