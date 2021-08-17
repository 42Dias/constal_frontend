import { Component, Input } from '@angular/core';
import { PessoaFisicaFormModalService } from 'src/app/pessoa-fisica/form/pessoa-fisica-form-modal.service';
import { PessoaFisicaService } from 'src/app/pessoa-fisica/pessoa-fisica.service';

@Component({
  selector: 'app-pessoa-fisica-form-field',
  templateUrl: './pessoa-fisica-form-field.component.html',
})
export class PessoaFisicaFormFieldComponent {
  @Input() mode = 'single';
  @Input() submitted = false;
  @Input() control;
  @Input() label;
  @Input() required = false;
  @Input() appAutofocus = false;
  @Input() serverSideSearch = false;
  @Input() fetchFn = null;
  @Input() mapperFn = null;
  @Input()
  ngForm: any;
  @Input() showCreate = false;
  @Input() hint;
  @Input() placeholder;

  constructor(
    public service: PessoaFisicaFormModalService,
    public pessoaFisicaService: PessoaFisicaService,
  ) {}

  public get hasPermissionToCreate() {
    return this.pessoaFisicaService.hasPermissionToCreate;
  }

  public async createModalOpen() {
    const record = await this.service.open();
    if (record) {
      if (this.mode === 'multiple') {
        this.control.setValue([
          ...(this.control.value || []),
          this.mapperFn(record),
        ]);
      } else {
        this.control.setValue(this.mapperFn(record));
      }
    }
  }
}
