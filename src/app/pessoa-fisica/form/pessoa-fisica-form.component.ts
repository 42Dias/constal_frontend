import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PessoaFisicaModel } from 'src/app/pessoa-fisica/pessoa-fisica-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-pessoa-fisica-form',
  templateUrl: './pessoa-fisica-form.component.html',
})
export class PessoaFisicaFormComponent implements OnInit {
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
    return PessoaFisicaModel.fields;
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
        this.fields.cpf,
        this.fields.nome,
        this.fields.email,
        this.fields.telefone,
        this.fields.celular,
        this.fields.cep,
        this.fields.logradouro,
        this.fields.numero,
        this.fields.complemento,
        this.fields.pontoReferencia,
        this.fields.cidade,
        this.fields.estado,
        this.fields.bairro,
        this.fields.pix,
        this.fields.foto,
        this.fields.user,
      ],
      this.formBuilder,
    );
  }
}
