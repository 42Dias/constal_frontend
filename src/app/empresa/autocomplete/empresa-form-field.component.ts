import { Component, Input } from '@angular/core';
import { EmpresaFormModalService } from 'src/app/empresa/form/empresa-form-modal.service';
import { EmpresaService } from 'src/app/empresa/empresa.service';

@Component({
  selector: 'app-empresa-form-field',
  templateUrl: './empresa-form-field.component.html',
})
export class EmpresaFormFieldComponent {
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
    public service: EmpresaFormModalService,
    public empresaService: EmpresaService,
  ) {}

  public get hasPermissionToCreate() {
    return this.empresaService.hasPermissionToCreate;
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
