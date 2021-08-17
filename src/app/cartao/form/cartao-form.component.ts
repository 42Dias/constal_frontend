import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartaoModel } from 'src/app/cartao/cartao-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-cartao-form',
  templateUrl: './cartao-form.component.html',
})
export class CartaoFormComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() isEditing;
  @Input() record;
  @Input() saveLoading;
  @Input() modal = false;

  constructor(private formBuilder: FormBuilder) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
  }

  get fields() {
    return CartaoModel.fields;
  }

  doSave() {
    if (!this.form.valid) {
      return;
    }

    const id = this.record && this.record.id;
    const values = this.schema.cast(this.form.value);

    this.save.emit({ id, values });
  }

  doReset() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.schema.buildForm(this.record);
  }

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.tipo,
        this.fields.nomeTitular,
        this.fields.apelido,
        this.fields.numero,
        this.fields.cvv,
        this.fields.validade,
        this.fields.bandeira,
        this.fields.user,
      ],
      this.formBuilder,
    );
  }
}
