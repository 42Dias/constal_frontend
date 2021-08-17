import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PedidoModel } from 'src/app/pedido/pedido-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
})
export class PedidoFormComponent implements OnInit {
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
    return PedidoModel.fields;
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
        this.fields.codigo,
        this.fields.quantidadeProdutos,
        this.fields.formaPagamento,
        this.fields.valorTotal,
        this.fields.dataPedido,
        this.fields.dataProcessamento,
        this.fields.dataEnvio,
        this.fields.dataEntrega,
        this.fields.dataFaturamento,
        this.fields.status,
        this.fields.valorFrete,
        this.fields.compradorUser,
        this.fields.fornecedorEmpresa,
        this.fields.produto,
      ],
      this.formBuilder,
    );
  }
}
