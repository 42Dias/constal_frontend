import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { CarrinhoApi } from 'src/app/carrinho/carrinho.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-carrinho-form-modal',
  templateUrl: './carrinho-form-modal.component.html',
})
export class CarrinhoFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      CarrinhoFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await CarrinhoApi.create(values);
      const record = await CarrinhoApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.carrinho.create.success'),
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
