import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { EmpresaApi } from 'src/app/empresa/empresa.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-empresa-form-modal',
  templateUrl: './empresa-form-modal.component.html',
})
export class EmpresaFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      EmpresaFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await EmpresaApi.create(values);
      const record = await EmpresaApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.empresa.create.success'),
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
