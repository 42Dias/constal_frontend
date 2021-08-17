import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PessoaFisicaApi } from 'src/app/pessoa-fisica/pessoa-fisica.api';
import { PessoaFisicaListService } from 'src/app/pessoa-fisica/list/pessoa-fisica-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class PessoaFisicaDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private pessoaFisicaListService: PessoaFisicaListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await PessoaFisicaApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.pessoaFisica.destroy.success'),
      );

      this.router.navigate(['/pessoa-fisica']);

      await this.pessoaFisicaListService.doFetch(
        this.pessoaFisicaListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await PessoaFisicaApi.destroyAll(ids);
      this.loading = false;

      this.pessoaFisicaListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.pessoaFisica.destroyAll.success'),
      );

      this.router.navigate(['/pessoa-fisica']);

      return this.pessoaFisicaListService.doFetch(
        this.pessoaFisicaListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
