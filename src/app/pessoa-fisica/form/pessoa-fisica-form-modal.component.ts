import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PessoaFisicaApi } from 'src/app/pessoa-fisica/pessoa-fisica.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-pessoa-fisica-form-modal',
  templateUrl: './pessoa-fisica-form-modal.component.html',
})
export class PessoaFisicaFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      PessoaFisicaFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await PessoaFisicaApi.create(values);
      const record = await PessoaFisicaApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.pessoaFisica.create.success'),
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
