import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { CartaoApi } from 'src/app/cartao/cartao.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-cartao-form-modal',
  templateUrl: './cartao-form-modal.component.html',
})
export class CartaoFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      CartaoFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await CartaoApi.create(values);
      const record = await CartaoApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.cartao.create.success'),
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
