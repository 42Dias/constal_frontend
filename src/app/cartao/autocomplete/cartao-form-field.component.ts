import { Component, Input } from '@angular/core';
import { CartaoFormModalService } from 'src/app/cartao/form/cartao-form-modal.service';
import { CartaoService } from 'src/app/cartao/cartao.service';

@Component({
  selector: 'app-cartao-form-field',
  templateUrl: './cartao-form-field.component.html',
})
export class CartaoFormFieldComponent {
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
    public service: CartaoFormModalService,
    public cartaoService: CartaoService,
  ) {}

  public get hasPermissionToCreate() {
    return this.cartaoService.hasPermissionToCreate;
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
