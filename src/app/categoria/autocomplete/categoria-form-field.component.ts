import { Component, Input } from '@angular/core';
import { CategoriaFormModalService } from 'src/app/categoria/form/categoria-form-modal.service';
import { CategoriaService } from 'src/app/categoria/categoria.service';

@Component({
  selector: 'app-categoria-form-field',
  templateUrl: './categoria-form-field.component.html',
})
export class CategoriaFormFieldComponent {
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
    public service: CategoriaFormModalService,
    public categoriaService: CategoriaService,
  ) {}

  public get hasPermissionToCreate() {
    return this.categoriaService.hasPermissionToCreate;
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
