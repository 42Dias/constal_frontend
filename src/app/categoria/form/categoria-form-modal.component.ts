import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { CategoriaApi } from 'src/app/categoria/categoria.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-categoria-form-modal',
  templateUrl: './categoria-form-modal.component.html',
})
export class CategoriaFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      CategoriaFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await CategoriaApi.create(values);
      const record = await CategoriaApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.categoria.create.success'),
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
