import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaFisicaApi } from 'src/app/pessoa-fisica/pessoa-fisica.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class PessoaFisicaFormPageService {
  initLoading = false;
  saveLoading = false;
  record = null;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
  ) {}

  async doInit(id) {
    try {
      this.record = null;
      this.initLoading = true;

      if (id) {
        this.record = await PessoaFisicaApi.find(id);
      }

      this.initLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.initLoading = true;
      this.router.navigate(['/pessoa-fisica']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await PessoaFisicaApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.pessoaFisica.create.success'),
      );

      this.router.navigate(['/pessoa-fisica']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await PessoaFisicaApi.update(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.pessoaFisica.update.success'),
      );

      this.router.navigate(['/pessoa-fisica']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
