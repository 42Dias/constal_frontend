import { Component, Input } from '@angular/core';
import { ProdutoFormModalService } from 'src/app/produto/form/produto-form-modal.service';
import { ProdutoService } from 'src/app/produto/produto.service';

@Component({
  selector: 'app-produto-form-field',
  templateUrl: './produto-form-field.component.html',
})
export class ProdutoFormFieldComponent {
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
    public service: ProdutoFormModalService,
    public produtoService: ProdutoService,
  ) {}

  public get hasPermissionToCreate() {
    return this.produtoService.hasPermissionToCreate;
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
