import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ProdutoApi } from 'src/app/produto/produto.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-produto-form-modal',
  templateUrl: './produto-form-modal.component.html',
})
export class ProdutoFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      ProdutoFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await ProdutoApi.create(values);
      const record = await ProdutoApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.produto.create.success'),
      );

      if (this.dialogRef) {
        this.dialogRef.close(record);
      }
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  doCancel() {
    this.dialogRef.close();
  }
}
