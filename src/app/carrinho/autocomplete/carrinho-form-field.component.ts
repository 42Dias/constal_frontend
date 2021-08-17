import { Component, Input } from '@angular/core';
import { CarrinhoFormModalService } from 'src/app/carrinho/form/carrinho-form-modal.service';
import { CarrinhoService } from 'src/app/carrinho/carrinho.service';

@Component({
  selector: 'app-carrinho-form-field',
  templateUrl: './carrinho-form-field.component.html',
})
export class CarrinhoFormFieldComponent {
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
    public service: CarrinhoFormModalService,
    public carrinhoService: CarrinhoService,
  ) {}

  public get hasPermissionToCreate() {
    return this.carrinhoService.hasPermissionToCreate;
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
