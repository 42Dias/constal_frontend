import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ProdutoApi } from 'src/app/produto/produto.api';
import { ErrorService } from 'src/app/shared/error/error.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoEmpresaService {

  initLoading = false;
  saveLoading = false;
  record = null;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
  ) { }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await ProdutoApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        'Produto criado com sucesso!'
      );

      this.router.navigate(['/produto']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
