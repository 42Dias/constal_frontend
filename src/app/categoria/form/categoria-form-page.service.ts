import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaApi } from 'src/app/categoria/categoria.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class CategoriaFormPageService {
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
        this.record = await CategoriaApi.find(id);
      }

      this.initLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.initLoading = true;
      this.router.navigate(['/categoria']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await CategoriaApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.categoria.create.success'),
      );

      this.router.navigate(['/categoria']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await CategoriaApi.update(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.categoria.update.success'),
      );

      this.router.navigate(['/categoria']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
