import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PedidoApi } from 'src/app/pedido/pedido.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-pedido-form-modal',
  templateUrl: './pedido-form-modal.component.html',
})
export class PedidoFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      PedidoFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await PedidoApi.create(values);
      const record = await PedidoApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.pedido.create.success'),
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
